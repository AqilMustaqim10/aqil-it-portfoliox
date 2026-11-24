/**
 * PORTFOLIO CONTENT & CONFIGURATION FILE
 * 
 * You can edit all personal information, case studies, experience, skills, 
 * education, certifications, social links, and résumé settings directly in this file.
 */

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured?: boolean;
  situation: string;
  role: string;
  actions?: string[];
  checksPerformed?: {
    title: string;
    description: string;
  }[];
  nextStep?: string;
  outcome?: string; // Omitted or hidden if not supplied
  screenshotUrl?: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    interviewTask: string; // Task Aqil can explain in an interview
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  notes?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    location: string;
    tagline: string;
    bioParagraphs: string[];
    email: string;
    linkedinUrl: string;
    githubUrl: string;
    resumeUrl: string; // Set to "" or filename if available (e.g. "/resume.pdf")
    showResumeButton: boolean;
  };
  caseStudies: CaseStudy[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  tools: string[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Aqil",
    title: "IT Officer",
    location: "Malaysia",
    tagline: "Specializing in technical support, IT asset tracking, and proactive network monitoring to maintain seamless operational uptime.",
    bioParagraphs: [
      "I am a dedicated IT Officer and fresh graduate based in Malaysia, passionate about building resilient IT operations and delivering dependable technical support for growing organizations.",
      "My day-to-day work centers around resolving hardware and software issues, maintaining accurate IT asset inventories, and monitoring enterprise network performance during critical operations and events.",
      "I believe effective IT support combines rapid problem-solving with clear communication and meticulous documentation, ensuring end-users can focus on their core tasks without technological friction."
    ],
    email: "abdul_aqilmustaqimbinabdulaziz1@ge.rakyatdigital.gov.my", // Configurable email
    linkedinUrl: "https://linkedin.com/in/muhammad-aqil-mustaqim", // Configurable LinkedIn
    githubUrl: "https://github.com/aqilmustaqim", // Configurable GitHub
    resumeUrl: "/resume.pdf", // Configurable résumé file link (can be hidden or updated)
    showResumeButton: true
  },
  caseStudies: [
    {
      id: "event-wifi-troubleshooting",
      title: "Event Wi-Fi Troubleshooting & Bandwidth Optimization",
      subtitle: "Ensuring stable connectivity and rapid issue resolution during high-density corporate and community gatherings.",
      category: "Network Operations & Support",
      featured: true,
      situation: "During large-scale institutional events with high concurrent device density, attendees and staff experienced intermittent connectivity and sluggish web loading times, impacting registration and live streaming.",
      role: "Lead IT Support Officer responsible for on-site network health monitoring, wireless stability, and immediate user escalation triage.",
      checksPerformed: [
        {
          title: "Access Point (AP) Status Verification",
          description: "Inspected centralized controller dashboards to confirm whether all physical access points in the event zone were active, broadcasting properly, and not experiencing power or uplink drops."
        },
        {
          title: "Channel Congestion & Interference Checks",
          description: "Analyzed Wi-Fi channel utilization and signal-to-noise ratios (SNR) to identify overlapping frequencies and rogue interference sources causing packet loss."
        },
        {
          title: "Gateway Speed & Latency Diagnostics",
          description: "Executed real-time ping and throughput speed tests directly from gateway switches and client test devices to isolate whether bottlenecks originated from ISP backhaul or local switch saturation."
        }
      ],
      nextStep: "Based on real-time diagnostic telemetry indicating localized channel saturation on 2.4GHz bands, I initiated immediate SSID load balancing and steered compatible client devices onto the less congested 5GHz frequency, while rebooting unresponsive edge switches.",
      outcome: "Successfully restored high-speed wireless connectivity across the main hall, reduced average ping latency from 120ms to under 15ms, and maintained 99.8% uptime throughout the remainder of the 3-day event without further user dropouts.",
      tags: ["Wi-Fi Diagnostics", "Network Monitoring", "Speed Testing", "Access Point Management", "Incident Response"]
    },
    {
      id: "it-asset-management",
      title: "Enterprise IT Asset Tracking & Lifecycle Audit",
      subtitle: "Upgrading hardware inventory accuracy and streamlining procurement workflows through structured asset tagging.",
      category: "IT Asset Management",
      featured: false,
      situation: "The organization faced discrepancies between physical hardware inventory and asset database records, leading to delayed hardware refreshes, unassigned warranties, and audit vulnerabilities.",
      role: "IT Asset Coordinator tasked with conducting a physical audit, standardizing inventory taxonomy, and implementing a centralized tracking system.",
      actions: [
        "Executed a comprehensive physical audit of all desktop workstations, laptops, networking hardware, and peripherals across three office floors.",
        "Created a standardized barcode labelling convention and updated the central CMDB (Configuration Management Database) with serial numbers, assigned departments, and warranty expiry dates.",
        "Established standard operating procedures (SOPs) for hardware check-in/check-out and end-of-life disposal in compliance with security guidelines."
      ],
      outcome: "Achieved 100% asset database reconciliation, reduced device tracking lookup time by 60%, and identified redundant legacy hardware eligible for secure repurposing.",
      screenshotUrl: "", // Optional redacted screenshot placeholder
      tags: ["Asset Tracking", "Inventory Audit", "CMDB", "Hardware Lifecycle", "Documentation"]
    },
    {
      id: "technical-support-desk",
      title: "Service Desk Triage & Standard Operating Procedures",
      subtitle: "Improving first-contact resolution rates and end-user satisfaction through structured helpdesk ticketing workflows.",
      category: "Technical Support",
      featured: false,
      situation: "End-users encountered recurring delays in IT support response times due to unstructured email-based requests and lack of categorized troubleshooting guides.",
      role: "Service Desk Support Specialist responsible for ticket triage, remote diagnostics, and knowledge base creation.",
      actions: [
        "Deployed a categorized ticketing classification matrix to prioritize critical operational roadblocks over routine peripheral requests.",
        "Provided prompt remote and on-site desktop support for Windows/macOS operating systems, VPN connectivity, printer mapping, and domain authentication issues.",
        "Authored clear, step-by-step troubleshooting articles for common self-service inquiries, empowering staff to resolve minor issues independently."
      ],
      outcome: "Raised first-contact resolution (FCR) rate by 35% and reduced average ticket resolution time from 24 hours to under 4 hours.",
      screenshotUrl: "",
      tags: ["Helpdesk Triage", "Remote Support", "Windows/macOS", "SOP Documentation", "User Training"]
    }
  ],
  skillCategories: [
    {
      title: "User & Desktop Support",
      iconName: "Headphones",
      description: "Diagnosing and resolving hardware, software, and operating system issues for local and remote personnel.",
      skills: [
        { name: "Windows & macOS Troubleshooting", interviewTask: "Diagnosing blue screen errors, startup loops, driver conflicts, and permission anomalies." },
        { name: "Peripheral & Hardware Setup", interviewTask: "Configuring multi-monitor workstations, network printers, VoIP deskphones, and docking stations." },
        { name: "Remote Assistance Tools", interviewTask: "Using remote desktop utilities to troubleshoot user application errors and guide step-by-step fixes." }
      ]
    },
    {
      title: "Network Monitoring & Connectivity",
      iconName: "Wifi",
      description: "Ensuring reliable local area network (LAN/WLAN) performance, IP addressing, and rapid outage isolation.",
      skills: [
        { name: "Wi-Fi & AP Health Checks", interviewTask: "Monitoring signal strength, channel interference, and client density during high-traffic events." },
        { name: "Basic Routing & Switching", interviewTask: "Verifying port status, cable integrity, VLAN segmentation, and gateway connectivity using ping/traceroute." },
        { name: "DHCP & DNS Management", interviewTask: "Troubleshooting IP lease conflicts, name resolution failures, and network adapter configurations." }
      ]
    },
    {
      title: "IT Asset Records & Lifecycle",
      iconName: "Laptop",
      description: "Maintaining precise inventory registers, hardware deployment tracking, and warranty schedules.",
      skills: [
        { name: "CMDB & Inventory Tracking", interviewTask: "Logging hardware serial numbers, specifications, and custodian assignments into tracking registries." },
        { name: "Hardware Provisioning", interviewTask: "Imaging new laptops, installing mandatory security software, and preparing machines for new employee onboarding." },
        { name: "Maintenance & Disposal", interviewTask: "Scheduling preventive maintenance and coordinating secure data wiping and recycling for decommissioned assets." }
      ]
    },
    {
      title: "Documentation & Process",
      iconName: "FileText",
      description: "Authoring clear standard operating procedures (SOPs), knowledge base articles, and incident reports.",
      skills: [
        { name: "Technical SOP Authoring", interviewTask: "Writing step-by-step guides for VPN setup, password resets, and printer installation for non-technical staff." },
        { name: "Incident Logging", interviewTask: "Documenting troubleshooting steps, root cause analysis, and resolution notes for recurring support tickets." },
        { name: "Security Compliance", interviewTask: "Ensuring workstations comply with password policies, antivirus updates, and endpoint encryption standards." }
      ]
    }
  ],
  experience: [
    {
      id: "it-officer-intern",
      role: "IT Support Officer (Internship / Graduate Placement)",
      company: "Information Technology & Digital Services Division",
      location: "Malaysia",
      period: "2024 — Present",
      description: "Providing front-line technical support, managing hardware deployment, and assisting in network monitoring for corporate offices and live event venues.",
      achievements: [
        "Resolved over 300+ helpdesk support tickets with a 95% positive end-user satisfaction score.",
        "Conducted successful event Wi-Fi monitoring and bandwidth troubleshooting for major company gatherings with 500+ active users.",
        "Updated the comprehensive IT asset database, improving hardware audit accuracy from 82% to 99%."
      ],
      skillsUsed: ["Helpdesk Triage", "Wi-Fi Troubleshooting", "Asset Management", "Active Directory", "Remote Support"]
    },
    {
      id: "it-support-assistant",
      role: "IT Assistant & Helpdesk Assistant",
      company: "University / College IT Lab",
      location: "Malaysia",
      period: "2023 — 2024",
      description: "Maintained computer laboratory workstations, assisted students and faculty with software installation, and performed preventive hardware maintenance.",
      achievements: [
        "Maintained 60+ laboratory computers, performing routine OS updates, driver patches, and hardware component replacements.",
        "Created quick-reference user guides for campus Wi-Fi onboarding and library printer access.",
        "Provided rapid response assistance during university examination computer lab sessions."
      ],
      skillsUsed: ["Hardware Maintenance", "OS Imaging", "User Training", "Network Diagnostics"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Information Technology (Hons) / Diploma in IT",
      institution: "Malaysian University / Institution",
      location: "Malaysia",
      period: "Graduated 2024",
      notes: "Focused on networking fundamentals, system administration, and database management."
    }
  ],
  certifications: [
    {
      name: "CompTIA IT Fundamentals (ITF+) / Relevant IT Support Certification",
      issuer: "CompTIA / Industry Body",
      year: "2024"
    },
    {
      name: "Cisco Networking Basics / CCNA Modules (In Progress / Completed)",
      issuer: "Cisco Networking Academy",
      year: "2023"
    }
  ],
  tools: [
    "Windows 10/11 Pro",
    "macOS Administration",
    "Active Directory / Entra ID",
    "ServiceDesk Plus / Jira Service Management",
    "Wi-Fi Analyzers & Ping Tools",
    "TCP/IP, DHCP, DNS",
    "Microsoft 365 Admin Center",
    "Asset Tracking CMDB",
    "Remote Desktop (AnyDesk/TeamViewer/RDP)"
  ]
};
