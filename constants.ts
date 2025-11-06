import { Tier, AssessmentQuestion, TierDetails } from './types';

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  { id: 1, section: 'A', text: "Service Criticality: If this vendor's service went offline, would it cause a major disruption to our business operations or our ability to serve customers within one business day?" },
  { id: 2, section: 'A', text: "System Integration: Will this vendor's system or staff require administrative-level access to our core IT network or critical business applications (e.g., SAP, our Google, Active Drietory, VMWare, cloud environment etc.)?" },
  { id: 3, section: 'A', text: "Highly Sensitive Data: Will this vendor access, store, or process large volumes of customer or employee personal information (as defined by POPIA) or our most sensitive intellectual property?" },
  { id: 4, section: 'B', text: "Data Sensitivity: Will this vendor access, store, or process any sensitive company data not available to the public (e.g., internal reports, contact lists, non-critical personal info)?" },
  { id: 5, section: 'B', text: "Service Importance: If this vendor's service went offline, would it impact the efficiency of an important business function (even if a manual workaround exists)?" },
  { id: 6, section: 'B', text: "System Connection: Will this vendor's service be connected to our IT systems in any way (e.g., via an API, a data feed, or requiring a user account on our network)?" },
];

export const TIER_DEFINITIONS: Record<Tier, TierDetails> = {
  [Tier.One]: {
    title: "Tier 1 (Critical)",
    description: "This vendor poses a high level of risk. A comprehensive security and compliance review is required. Please send the following requirements to the vendor for a detailed response.",
    headers: ['Req #', 'Control Domain', 'Requirement Description', 'Compliant (Yes/No)', 'Vendor Comments / Evidence Provided'],
    requirements: [
      // Service Continuity & Ransomware Defense
      ['1.1', 'Service Continuity & Ransomware Defense', 'Can you contractually commit to a Recovery Time Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of 15 minutes?', '', ''],
      ['1.2', 'Service Continuity & Ransomware Defense', 'Are backups immutable for at least 30 days and stored in a logically/physically separate, air-gapped environment?', '', ''],
      ['1.3', 'Service Continuity & Ransomware Defense', 'Do you perform a full disaster recovery test against a worst-case scenario at least annually and can you provide a report proving RTO/RPO was met?', '', ''],
      // Privileged Access Security
      ['2.1', 'Privileged Access Security', 'Is Multi-Factor Authentication (MFA) enforced for all administrative access to infrastructure, applications, and network devices?', '', ''],
      ['2.2', 'Privileged Access Security', 'Is all privileged access managed through a Privileged Access Management (PAM) solution that vaults credentials and records sessions?', '', ''],
      ['2.3', 'Privileged Access Security', 'Are administrative accounts functionally separate from standard daily-use accounts (e.g., email)?', '', ''],
      // Vulnerability Management
      ['3.1', 'Vulnerability Management', 'Can you meet the following remediation SLAs from detection: Critical vulnerabilities within 15 days, and High within 30 days?', '', ''],
      // Verification & Transparency
      ['4.1', 'Verification & Transparency', 'Do you agree to our right to conduct an annual penetration test and architecture review of the environment hosting our services?', '', ''],
      ['4.2', 'Verification & Transparency', 'Do you agree to provide, upon reasonable request, specific evidence of mandatory controls (e.g., redacted configurations, logs)?', '', ''],
      ['4.3', 'Verification & Transparency', 'Can you provide a current SOC 2 Type II report or equivalent certification (e.g., ISO 27001)?', '', ''],
      // Incident Response
      ['5.1', 'Incident Response', 'Can you contractually commit to notifying us of a confirmed security incident within 2 hours of declaration?', '', ''],
      ['5.2', 'Incident Response', 'Do you agree to form a joint incident response team with us during any critical security incident?', '', ''],
      ['5.3', 'Incident Response', 'Do you agree to provide a detailed, technically transparent Root Cause Analysis (RCA) within 5 business days of incident resolution?', '', ''],
      ['5.4', 'Incident Response', 'Do you maintain a Cyber Liability Insurance policy with coverage for data breaches and business interruption? Can you provide a Certificate of Insurance as proof?', '', ''],
      // Secure Software Development (if applicable)
      ['6.1', 'Secure Software Development', 'Do you follow a formal S-SDLC framework, such as OWASP SAMM or BSIMM?', '', ''],
      ['6.2', 'Secure Software Development', 'Can you provide evidence of mandatory, role-based security training for all development staff?', '', ''],
      ['6.3', 'Secure Software Development', 'Is automated security testing (SAST, SCA, DAST) integrated into your development pipeline?', '', ''],
      ['6.4', 'Secure Software Development', 'Do you have a process for managing vulnerabilities in third-party/open-source libraries?', '', ''],
      ['6.5', 'Secure Software Development', 'Do you enforce a policy that all Critical/High vulnerabilities are remediated before code is released to production?', '', ''],
      ['6.6', 'Secure Software Development', 'Do you agree to provide us with summaries of your application security testing results upon request?', '', ''],
    ],
  },
  [Tier.Two]: {
    title: "Tier 2 (Standard)",
    description: "This vendor poses a medium level of risk. A standard due diligence process is necessary. Please send the following requirements to the vendor.",
    headers: ['Req #', 'Control Domain', 'Requirement Description'],
    requirements: [
       // Data Protection & Resilience
      ['1.1', 'Data Protection & Resilience', 'Do you maintain regular, tested, and logically isolated backups of our data?'],
      ['1.2', 'Data Protection & Resilience', 'Do you maintain and annually test a formal Disaster Recovery / Business Continuity plan?'],
      ['1.3', 'Data Protection & Resilience', 'Is all of our data encrypted both at rest and in transit using strong, industry-standard protocols?'],
      // Access Control
      ['2.1', 'Access Control', 'Is Multi-Factor Authentication (MFA) enforced for all administrative accounts and any external access to systems with our data?'],
      ['2.2', 'Access Control', 'Is access to our data restricted based on the principle of least privilege?'],
      // Vulnerability Management
      ['3.1', 'Vulnerability Management', 'Do you operate a formal program to identify and remediate security vulnerabilities in a timely manner based on risk?'],
      // Security Assurance
      ['4.1', 'Security Assurance', 'Do you agree to complete our annual security questionnaire and provide supporting documentation upon request?'],
      ['4.2', 'Security Assurance', 'Can you provide a summary or attestation letter from your most recent penetration test?'],
      ['4.3', 'Security Assurance', 'Can you provide a current security certification (e.g., ISO 27001) or audit report (e.g., SOC 2 Type II)?'],
      // Incident Response
      ['5.1', 'Incident Response', 'Do you agree to notify us of a confirmed security incident affecting our data without undue delay, and no later than 48 hours?'],
      ['5.2', 'Incident Response', 'Do you agree to provide a Root Cause Analysis (RCA) following any significant security incident?'],
      // Secure Software Development (if applicable)
      ['6.1', 'Secure Software Development', 'Do you follow a documented Secure Software Development Lifecycle (S-SDLC)?'],
      ['6.2', 'Secure Software Development', 'Do your developers receive annual training on secure coding practices (e.g., OWASP standards)?'],
      ['6.3', 'Secure Software Development', 'Do you perform security testing on your code before it is released to production?'],
      ['6.4', 'Secure Software Development', 'Do you have a process for managing vulnerabilities in third-party/open-source libraries?'],
    ],
  },
  [Tier.Three]: {
    title: "Tier 3 (Low-Risk)",
    description: "This vendor poses a low level of risk. Basic verification is sufficient. Please send the following requirements to the vendor.",
    headers: ['Req #', 'Principle', 'Description', 'Aligned (Yes/No)', 'Comments'],
    requirements: [
      ['1', 'Secure Authentication', 'Do you enforce the use of strong passwords for your company systems and use Multi-Factor Authentication (MFA) where it is available?', '', ''],
      ['2', 'System Patching', 'Do you have a process to keep your computer systems, software, and applications updated with the latest security patches?', '', ''],
      ['3', 'Malware Protection', 'Are your company computers protected by up-to-date anti-malware or anti-virus software?', '', ''],
      ['4', 'Credential Protection', 'Do you agree to protect any login credentials we provide to you and ensure they are not shared or stored insecurely?', '', ''],
      ['5', 'Security Notification', 'Do you agree to notify us in a timely manner if you have a security issue on your end that could potentially affect us?', '', ''],
    ],
  },
};
