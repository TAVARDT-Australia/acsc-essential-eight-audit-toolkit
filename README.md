# ACSC Essential Eight Audit Toolkit

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Verification Suite](https://img.shields.io/badge/TAVARDT-Australian%20Suite-5b3cf5.svg)](https://tools.tavardt.com/au/)
[![Governance](https://img.shields.io/badge/Compliance-ACSC%20Essential%20Eight-00C853.svg)](https://ag.tavardt.com/au/cybersecurity/)

A practical engineering checklist, perimeter diagnostic scripts, and maturity baseline validation framework aligned with the **Australian Cyber Security Centre (ACSC) Essential Eight** strategies.

Engineered and maintained by the cyber defence practice at **TAVARDT**.

***

## 1. Overview & The Essential Eight Strategies

The Australian Cyber Security Centre (ACSC) prioritises eight baseline mitigation strategies to protect Australian organisations against targeted cyber intrusions, ransomware, and credential harvesting:

1. **Application Control:** Restrict execution of unapproved binaries and scripts.
2. **Patch Applications:** Remediate critical security vulnerabilities within 48 hours.
3. **Configure Office Macro Settings:** Block macros originating from untrusted web sources.
4. **User Application Hardening:** Disable unnecessary browser extensions and unneeded legacy protocols.
5. **Restrict Administrative Privileges:** Enforce least-privilege architecture across all server endpoints.
6. **Patch Operating Systems:** Maintain current operating system kernels with automated patching.
7. **Multi-Factor Authentication (MFA):** Mandatory hardware or app-based MFA for administrative and remote access.
8. **Regular Backups:** Retain immutable, isolated off-site backups with regular restoration drills.

***

## 2. Essential Eight Maturity Level Matrix

| Strategy | Maturity Level 1 | Maturity Level 2 | Maturity Level 3 |
|-|-|-|-|
| **Patch Applications** | Critical patches within 1 month | Critical patches within 48 hours | Automated scanning and patching |
| **MFA Enforcement** | MFA for remote workers | MFA for all web portals & cloud apps | Phishing-resistant MFA (FIDO2) |
| **Restricting Admin** | Re-evaluate privileges regularly | Separate admin accounts with no web | PAM solution with full session audit |
| **Data Backups** | Backups tested annually | Daily backups, tested quarterly | Immutable, air-gapped backups |

***

## 3. Perimeter Diagnostic CLI for Australian Domains

This repository provides an automated Node.js validation tool designed to inspect external perimeter controls and anti-spoofing defences for Australian organisations (`.com.au`, `.org.au`, `.edu.au`):

### Running via Terminal:
```bash
node bin/essential8-audit.js yourcompany.com.au
```

### What the Toolkit Evaluates:
* **Transport Encryption & HSTS:** Strict transport security enforcement.
* **Email Brand Authentication:** DMARC, SPF, and DKIM alignment to prevent BEC (Business Email Compromise).
* **Credential & Configuration Exposure:** Scanning for public `.env` files and exposed server backups.
* **Security Headers Baseline:** CSP, X-Frame-Options, and Referrer-Policy enforcement.

***

## 4. Online Diagnostic Tools (Australia)

For full automated diagnostics, use the regional Australian verification suite:

* [DMARC & Email Spoofing Validator](https://tools.tavardt.com/au/dmarc-checker/): Prevents domain spoofing and Business Email Compromise.
* [Security Headers Audit](https://tools.tavardt.com/au/security-headers-check/): Verifies browser protection baselines.
* [Exposed Files & Credential Scanner](https://tools.tavardt.com/au/exposed-files-scanner/): Detects accidental leaks of environment configurations.
* Full Diagnostic Suite (Australia): 20 free technical tools.

***

## 5. Enterprise Cyber Defence & Incident Response in Australia

Need professional assistance implementing Essential Eight Maturity Level 3, offensive penetration testing, or emergency DFIR in Sydney, Melbourne, Brisbane, or Perth?

* **Australian Practice:** [Institutional Portal](https://ag.tavardt.com/au/)
* **Offensive Security & Pentesting:** [https://ag.tavardt.com/au/cybersecurity/penetration-testing/](https://ag.tavardt.com/au/cybersecurity/penetration-testing/)
* **DDoS Defence & Edge Filtering:** [https://ag.tavardt.com/au/cybersecurity/ddos-attack/](https://ag.tavardt.com/au/cybersecurity/ddos-attack/)
* **Direct Inquiries:** [Contact Channel](https://ag.tavardt.com/au/contact/)

***

## Useful Links

* **Corporate Portal:** https://ag.tavardt.com/au/
* **Diagnostic Suite:** https://tools.tavardt.com/au/
* **Technical Contact:** https://ag.tavardt.com/au/contact/

***

## License

Released under the MIT License. Copyright

***

© 2026 TAVARDT. All rights reserved.
