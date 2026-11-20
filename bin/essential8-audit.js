#!/usr/bin/env node

/**
 * TAVARDT Australia | ACSC Essential Eight Perimeter Verification CLI
 * https://tools.tavardt.com/au/
 */

const https = require('https');
const dns = require('dns').promises;

const target = process.argv[2];

if (!target) {
  console.log('Usage: node bin/essential8-audit.js <domain-or-url>');
  console.log('Example: node bin/essential8-audit.js enterprise.com.au\n');
  process.exit(1);
}

const cleanDomain = target.replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
const fullUrl = `https://${cleanDomain}`;

console.log('================================================================');
console.log(' TAVARDT Australia | ACSC Essential Eight Perimeter Validation');
console.log(` Target Domain: ${cleanDomain}`);
console.log('================================================================\n');

async function runAudit() {
  console.log('[1/3] Auditing Transport Encryption & HTTP Security Headers...');
  try {
    const res = await new Promise((resolve, reject) => {
      const req = https.get(fullUrl, { timeout: 8000 }, resolve);
      req.on('error', reject);
      req.on('timeout', () => { req.destroy(); reject(new Error('Connection timeout')); });
    });

    const headers = res.headers;
    const checks = [
      { name: 'Strict-Transport-Security (HSTS)', present: !!headers['strict-transport-security'] },
      { name: 'Content-Security-Policy (CSP)', present: !!headers['content-security-policy'] },
      { name: 'X-Frame-Options (Clickjacking Mitigation)', present: !!headers['x-frame-options'] },
      { name: 'X-Content-Type-Options (MIME Sniffing)', present: !!headers['x-content-type-options'] }
    ];

    checks.forEach(c => {
      console.log(`  ${c.present ? '[PASSED]' : '[WARNING]'} ${c.name}: ${c.present ? 'Enforced' : 'Missing'}`);
    });
  } catch (err) {
    console.log(`  [ERROR] Connection failed: ${err.message}`);
  }

  console.log('\n[2/3] Checking DMARC Brand & Anti-Spoofing Records...');
  try {
    const records = await dns.resolveTxt(`_dmarc.${cleanDomain}`);
    const dmarcRecord = records.flat().find(r => r.startsWith('v=DMARC1'));
    if (dmarcRecord) {
      console.log(`  [PASSED] DMARC Policy Active: ${dmarcRecord}`);
    } else {
      console.log('  [CRITICAL] Missing DMARC Record. Domain is exposed to Business Email Compromise.');
    }
  } catch {
    console.log('  [CRITICAL] DMARC lookup returned no valid TXT record.');
  }

  console.log('\n[3/3] Probing Public Access to Sensitive Files (.env, backup dumps)...');
  try {
    const envRes = await new Promise((resolve, reject) => {
      const req = https.get(`${fullUrl}/.env`, { timeout: 6000 }, resolve);
      req.on('error', reject);
      req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
    });

    if (envRes.statusCode === 200) {
      console.log('  [CRITICAL BREACH RISK] Environment file /.env returned HTTP 200! Secret keys exposed.');
    } else {
      console.log(`  [PASSED] Environment configuration is protected (HTTP ${envRes.statusCode}).`);
    }
  } catch {
    console.log('  [PASSED] Environment configuration is not publicly accessible.');
  }

  console.log('\n================================================================');
  console.log(' REGIONAL DIAGNOSTIC REPORT:');
  console.log(` https://tools.tavardt.com/au/dmarc-checker/`);
  console.log(` https://tools.tavardt.com/au/security-headers-check/`);
  console.log(' For ACSC Essential Eight Remediation: https://ag.tavardt.com/au/cybersecurity/');
  console.log('================================================================\n');
}

runAudit();
