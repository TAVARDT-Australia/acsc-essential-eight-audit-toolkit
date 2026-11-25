# ACSC Essential Eight Audit Toolkit

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Verification Suite](https://img.shields.io/badge/TAVARDT-Australian%20Suite-5b3cf5.svg)](https://tools.tavardt.com/au/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Node.js-yellow.svg)](https://nodejs.org/)
[![Governance](https://img.shields.io/badge/Compliance-ACSC%20Essential%20Eight-00C853.svg)](https://ag.tavardt.com/au/cybersecurity/)

A practical engineering checklist, perimeter diagnostic scripts, and maturity baseline validation framework aligned with the **Australian Cyber Security Centre (ACSC) Essential Eight** strategies.

Engineered and maintained by the cyber defence practice at **TAVARDT**.

***

## 1. Overview & The Essential Eight Strategies

The Australian Cyber Security Centre (ACSC) prioritises eight baseline mitigation strategies to protect Australian organisations against targeted cyber intrusions, ransomware, and credential harvesting:

1. **Application Control:** Restrict execution of unapproved binaries, executables, scripts, and software installers.
2. **Patch Applications:** Remediate critical security vulnerabilities within 48 hours to neutralize active exploit payloads.
3. **Configure Office Macro Settings:** Block macros originating from untrusted web sources and unvetted email attachments.
4. **User Application Hardening:** Disable unnecessary browser extensions, Java web plugins, and unneeded legacy protocols.
5. **Restrict Administrative Privileges:** Enforce least-privilege architecture and separate credential tiers across all systems.
6. **Patch Operating Systems:** Maintain current operating system kernels and apply security rollups with automated patching.
7. **Multi-Factor Authentication (MFA):** Mandatory hardware security keys or app-based MFA for administrative and remote access.
8. **Regular Backups:** Retain immutable, isolated off-site backups with scheduled restoration drills and verification.

***

## 2. Essential Eight Maturity Level Matrix

<table>
  <thead>
    <tr>
      <th>Mitigation Strategy</th>
      <th>Maturity Level 1</th>
      <th>Maturity Level 2</th>
      <th>Maturity Level 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Patch Applications</strong></td>
      <td>Critical patches applied within 1 month</td>
      <td>Critical patches applied within 48 hours</td>
      <td>Automated vulnerability scanning and instant patching</td>
    </tr>
    <tr>
      <td><strong>Multi-Factor Authentication</strong></td>
      <td>MFA for remote workers and external connections</td>
      <td>MFA for all web portals and cloud services</td>
      <td>Phishing-resistant MFA (FIDO2 / WebAuthn hardware keys)</td>
    </tr>
    <tr>
      <td><strong>Restrict Administrative Privileges</strong></td>
      <td>Privileged accounts reviewed regularly</td>
      <td>Separate admin accounts with no internet or email access</td>
      <td>Privileged access management (PAM) with session auditing</td>
    </tr>
    <tr>
      <td><strong>Regular Data Backups</strong></td>
      <td>Data backups tested annually for restoration</td>
      <td>Daily backups tested quarterly with synchronization</td>
      <td>Immutable, air-gapped backups tested continuously</td>
    </tr>
    <tr>
      <td><strong>User Application Hardening</strong></td>
      <td>Web browsers configured to block untrusted ads</td>
      <td>Unneeded browser features and legacy extensions blocked</td>
      <td>Comprehensive browser execution sandboxing enforced</td>
    </tr>
  </tbody>
</table>

***

## 3. Perimeter Diagnostic CLI for Australian Domains

This repository provides an automated Node.js validation tool designed to inspect external perimeter controls and anti-spoofing defences for Australian organisations (.com.au, .org.au, .edu.au):

### Running via Terminal:
`ash
node bin/essential8-audit.js yourcompany.com.au
`

### What the Toolkit Evaluates:
* **Transport Encryption & HSTS:** Strict transport security enforcement.
* **Email Brand Authentication:** DMARC, SPF, and DKIM alignment to prevent BEC (Business Email Compromise).
* **Credential & Configuration Exposure:** Scanning for public .env files and exposed server backups.
* **Security Headers Baseline:** CSP, X-Frame-Options, and Referrer-Policy enforcement.

***

## 4. Frequently Asked Questions (Technical FAQ)

### 1. How does this toolkit assess alignment with ACSC Essential Eight Maturity Levels?
The toolkit performs automated perimeter diagnostics across transport security, email authentication, and exposed credential configuration files. These checks directly evaluate external surface baselines required for Maturity Level 1 and Maturity Level 2 compliance under Australian Cyber Security Centre guidelines.

### 2. Why is DMARC verification essential for Australian organisations under Essential Eight guidelines?
DMARC enforcement directly mitigates Business Email Compromise (BEC) and phishing campaigns by validating domain authentication. Implementing a strict quarantine or reject policy blocks spoofed emails impersonating Australian public and private sector organisations.

### 3. How does the perimeter scanner identify exposed environment configuration files?
The Node.js diagnostic CLI dispatches an HTTPS probe to standard secret paths such as /.env and inspects the response status code. If an HTTP 200 response is detected, the utility alerts operators to critical database and API credential exposure.

### 4. What role do HTTP security headers play in User Application Hardening?
Security headers including Content-Security-Policy (CSP), X-Frame-Options, and X-Content-Type-Options prevent browser-side code execution, clickjacking, and MIME sniffing attacks. Enforcing these headers hardens client applications when rendering external web services.

### 5. Can this automated audit script be integrated into CI/CD pipelines?
Yes, in/essential8-audit.js runs deterministically with standard exit codes in GitHub Actions, GitLab CI, or local deployment workflows. Automated testing ensures perimeter controls and header baselines do not regress during application releases.

***

## 5. Online Diagnostic Tools (Australia)

For full automated diagnostics, use the regional Australian verification suite:

* [DMARC & Email Spoofing Validator](https://tools.tavardt.com/au/dmarc-checker/): Prevents domain spoofing and Business Email Compromise.
* [Security Headers Audit](https://tools.tavardt.com/au/security-headers-check/): Verifies browser protection baselines.
* [Exposed Files & Credential Scanner](https://tools.tavardt.com/au/exposed-files-scanner/): Detects accidental leaks of environment configurations.
* Full Diagnostic Suite (Australia): 20 free technical tools.

***

## 6. Advanced Cyber Defence & Incident Response in Australia

Need professional assistance implementing Essential Eight Maturity Level 3, offensive penetration testing, or emergency DFIR in Sydney, Melbourne, Brisbane, or Perth?

* **Offensive Security & Pentesting:** [https://ag.tavardt.com/au/cybersecurity/penetration-testing/](https://ag.tavardt.com/au/cybersecurity/penetration-testing/)
* **DDoS Defence & Edge Filtering:** [https://ag.tavardt.com/au/cybersecurity/ddos-attack/](https://ag.tavardt.com/au/cybersecurity/ddos-attack/)

***

## Useful Links

* **Corporate Portal:** https://ag.tavardt.com/au/
* **Diagnostic Suite:** https://tools.tavardt.com/au/
* **Technical Contact:** https://ag.tavardt.com/au/contact/

***

## License

Released under the MIT License.

***

© 2026 TAVARDT. All rights reserved.
