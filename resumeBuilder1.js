var work = {
	"jobs": [{
		"employer": "Cofense",
		"title": "Senior Cloud Engineer",
		"location": "Virginia -Remote",
		"dates": "July 2021 - July 2022",
		"description": [ "Senior Cloud Engineer Developing/Deploying Applications within AWS and Azure "]

	},{
		"employer": "CSCGlobal",
		"title": "Team Lead ITOM Observability",
		"location": "Delaware -Remote",
		"dates": "April 2017 - July 2021",
		"description": [ "Technical and Team Lead for CSCGlobal's Enterprise Monitoring / Log Management environment. "]

	},{
		"employer": "Wipro Technologies LTD",
		"title": "Tools Lead Architect - Greater Toronto Airports Authority",
		"location": "Toronto, Ontario",
		"dates": "June 2016 - Present",
		"description": [ "Leading technical delivery team in deploying a large spectrum of Enterprise Management software to ensure monitoring visibility of GTAA’s mission critical infrastructure that support their mission critical business applications. This includes integrating the various element managers that are deployed into the new event management framework. "]

	},{
		"employer": "J9 Technologies an Axxiome Company",
		"title": "Senior Consultant ITOM",
		"location": "Toronto, Ontario",
		"dates": "May 2015 - June 2016",
		"description": [ "Supporting and consultation services of the Enterprise Management software deployed by our customers and development activities of the J9 Accelerator software. "]

	},{
		"employer": "FCT",
		"title": "Enterprise System Engineer",
		"location": "Oakville, Ontario",
		"dates": "February 2011 - April 2015",
		"description": [ "Working as a key Enterprise System Management Specialist to develop and maintain the HP Enterprise Monitoring Infrastructure to monitor key applications and infrastructure."]

	}, {
		"employer": "CT Consulting",
		"title": "Enterprise System Management Consultant",
		"location": "Montreal ,Quebec",
		"dates": "April 2011-Octber 2012",
		"description": [ "Key member to architect and engineer Enterprise Management Appliances for Network, Storage and Operations Management." ]
	}
	,
	 {
		"employer": "Toyota Motor Manufacturing Canada",
		"title": "Senior System Engineer",
		"location": "Cambridge, Ontario",
		"dates": "May 2010 - February 2011",
		//"description": "Designed and implemented an application for an international reference pricing for pharmacy industry to analyze revenue for different scenarios in cloud platform salesforce.com using Apex and Java script, Jquery, HTML5. Using Agile method to develop and Git repository tools" + "\n" + "Research about column oriented data base and SQL server 2013" + "\n" + "Research about could platforms and their usages"
		"description" : [  "Key Member to maintain and develop the Enterprise Monitoring Infrastructure to monitor key applications and IT infrastructure. Toyota relies on the monitoring infrastructure to ensure availability and to assist in confirmation to ensure production readiness."]
	}, {
		"employer": "CIBC",
		"title": " Senior Enterprise Engineer",
		"location": "Toronto, Ontario",
		"dates": "June 2009 - April 2010",
		//"description": "Designed and implemented an application to analysis the result given from<br> the sensor attached to the human body and plot the movement in real time in Java"
		"description": ["Key Enterprise Engineer in developing the Entreprise System Management  infrastructure to support current and new monitoring initiatives. "]
		},
		{
		"employer": " ROGERS COMMUNICATIONS INC",
		"title": " Enterprise Systems Management Engineer – Consultant",
		"location": "Brampton, Ontario",
		"dates": "August 2008 -  June 2009",
		"description": [ "Designed and architected Enterprise Management Solutions incorporating Rogers heterogeneous environment of enterprise and element managers."]
		},
		{
		"employer": "GREATER TORONTO AIRPORTS AUTHORITY",
		"title": " Senior Enterprise Consultant - IT&T Engineering & Architecture",
		"location": "Toronto, Ontario",
		"dates": "January 2005 – December 2008",
		"description": [ "Key Enterprise Management resource to manage and develop the HP OpenView suite of tools deployed. Major initial role was to upgrade the currency of HPOM for Unix and NNM in a High Availability MC/Service Guard deployment."]
		},
		{
		"employer": "Toyota Canada",
		"title": "Senior Engineer - Consultant",
		"location": "Scarborough, Ontario",
		"dates": "November 2002 - December 2004",
		"description": ["Sole Technical resource responsible for deploying the original HP OpenView suite of tools to manage the IT infrastructure. " ]

	},
{
		"employer": "AT & T Canada",
		"title": "Systems Analyst",
		"location": "Mississauga, Ontario",
		"dates": "September 2000 - May 2002",
		"description": ["Maintained and supported the Entreprise System Management environment utilizing VPO Operations in a MC/Service Guard environment with customized hooks into OV Service Reporter, REMEDY, Netfinity Director and Cisco Info Centre (CIC)." ]},
{
		"employer": "Commerx Computer Solutions",
		"title": "HP OpenView Technical Consultant",
		"location": "Mississauga, Ontario",
		"dates": "February 2000 - September 2000",
		"description": [ "Senior Consultant responsible for design, documentation and implementation of end user products."]
},

 
{
		"employer": "Pat Stuart Developments Limited",
		"title": "Systems Administrator",
		"location": "Acton, Ontario",
		"dates": "October 1997 - February 2000",
		"description": ["" ]

	}
		
		
		
		
		
		
		
		
		],
	//Display work json object in resume object
	display: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formettedEmployerTitle = formattedEmployer + formattedTitle;
	        		$(".work-entry:last").append(formettedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			for ( desc in work.jobs[job].description) {
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[desc]);
			$(".work-entry:last").append(formattedDescription);
			}
		}

	},

	//Find all location that I have worked
	locationizer: function(_work) {
		var allLocation = [];
		for (var work in _work.jobs) {
			var _workLoc = _work.jobs[work].location;
			allLocation.push(_workLoc);
		}
		
		return allLocation;

	}
}
//////////////////////////////////////////////////BIO/////////////////////////////////////////////////////////////////
var bio = {
	"name": "Craig Janzen",
	"role": "IT Technical Professional",
	//"resume": "Resume tesghjb hbbjhbhjbjbjh",
		"contacts": {
		"Phone": "905.462.8017",
		"email": "craig.janzen@gmail.com",
		//"github": "Resume",
		"location": "1347 McGuffin Gate, Milton, ON L9T6M3"
	},
	"welcomeMessage": "Technical Professional with extensive experience in Enterprise System Management, Automation, Cloud, and Development/Deployments of key applications.",
	"skills": [
	    "Cloud (AWS/Azure)", "DevOps", "Databases", "Scripting Languages", "CI/CD", "Enterprise Management Software", "Automation", "Microservices", "Operating Systems", "Virtualization", "Networking", "APM", "Log Management", "Containers"
	//	"HP Software, and Windows, BSM OMi, SiteScope DDMa, UCMDB" , "web development", "JS", "MongoDB", "Java"
	],
	//"bioPic": "https://craigjanzen.github.io/Craig.jpg",
	"bioPic": "Craig.jpg",

	//Dispay bio json object in resume page
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	//	var formattedResume = HTMLheaderResume.replace("%data%", bio.resume);
	//	$("#topContacts").append(formattedResume);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Phone);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		//var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		//$("#topContacts").append(formattedGithub);
		//$("#footerContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		var formattedWeclome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWeclome);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
		
		
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
        
	}
}
//////////////////////////////////////////////////PROJET/////////////////////////////////////////////////////////////////
var projects = {
	"projects": [{
		"title": "HP-UX IT Certified Professional",
		"dates": "2002",
		"description": "",
//	    "description": "to be updated",
		//"images": ['http://i.imgur.com/PhC5STL.png']
        "images" : ""
	},{
	    
	    "title": "HP OpenView Certified Integration Expert",
		"dates": "2002",
		"description": "",
//	    "description": "to be updated",
		//"images": ['http://i.imgur.com/PhC5STL.png']
        "images" : ""
	    
	    
	},
	{
	    
	    "title": "Cisco Certified Network Associate (CCNA)",
		"dates": "2000",
		"description": "",
//	    "description": "to be updated",
		//"images": ['http://i.imgur.com/PhC5STL.png']
        "images" : ""
	    
	    
	}
	,
	{
	    
	    "title": "MCSE",
		"dates": "1999",
		"description": "",
//	    "description": "to be updated",
		//"images": ['http://i.imgur.com/PhC5STL.png']
        "images" : ""
	    	}
	
	
	
	
	
	
	
	],
	//Display projects in resume page
	display: function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImages);
				}
			}

		}

	}
}
//////////////////////////////////////////////////EDUCATION/////////////////////////////////////////////////////////////////
var education = {
	"schools": [ {
		"name": "Sheridan College",
		"location": "Oakville, Ontario",
		"degree": "Business Administration Diploma",
		"majors": ["Accounting"],
		"dates": "Sept 1993 - May 1996"

	}],
	"onlineCourses": [
		{
		"title": "ServiceNow – Service Mapping",
		"school": "ServiceNow",
		"dates": "June 2019",
		"url": ""
		},
		{
		"title": "ServiceNow – Discovery",
		"school": "ServiceNow",
		"dates": "June 2019",
		"url": ""
		},
		{
		"title": "ServiceNow – Fundamentals",
		"school": "ServiceNow",
		"dates": "May 2019",
		"url": ""
		},
		{
		"title": "ServiceNow – Event Management",
		"school": "ServiceNow",
		"dates": "May 2019",
		"url": ""
		},
		
		
	    {
		"title": "HP OMi Delta training",
		"school": "HP",
		"dates": "August 2015",
		"url": ""
		},
	    {
		"title": "55006 System Center Operations Manager 2012",
		"school": "Global Knowledge",
		"dates": "February 2015",
		"url": ""
		},   
	    
	  	{
		"title": "Information Storage and Management V2",
		"school": "EMC",
		"dates": "February 2015",
		"url": "",
		"url1": "https://education.emc.com/guest/campaign/InformationStorageandManagement.aspx?WT.mc_id=web_emccom_ISMV2_4114"
		},    
	    
	   {
		"title": "Symmetrix Integration with VMware vSphere",
		"school": "EMC",
		"dates": "December 2014",
		"url": "",
		"url1": "http://www.emc.com/collateral/hardware/white-papers/h8115-vmware-vstorage-vmax-wp.pdf"
	},
	    
	    
	    
	{
		"title": "VMware vSphere: What's New [V5.1]",
		"school": "VMWARE",
		"dates": "May 2013",
		"url": "",
		"url1": "https://mylearn.vmware.com/mgrreg/courses.cfm?ui=www_edu&a=one&id_subject=38605"
	},


	{
		"title": "PowerShell for the IT Administrator",
		"school": "Microsoft",
		"dates": "April 2013",
		"url": "",
		"url1": "http://www.microsoft.com/netherlands/microsoftuniversity/detail.aspx?id=28&category=workshop"
	}, {
		"title": "Configuration Management System 9.x Advanced",
		"school": "HP",
		"dates": "February 2013",
		"url": "",
		"url1": "http://h20546.www2.hp.com/main/get_file.cfm?code=9090&file=UCMDB350-90-Outline-A.pdf&sitepick=DU"

	}, {
		"title": "HP - Universal CMDB 9.x Essentials training",
		"school": "HP",
		"dates": "May 2012",
		"url": ""
	},
	{
		"title": "HP Network Node Manager i-series",
		"school": "HP",
		"dates": "2008",
		"url": ""
	},
{
		"title": "HP Serviceguard II: Continental clusters, CFS, & OracleRAC ",
		"school": "HP",
		"dates": "2008",
		"url": ""
	},
{
		"title": " HP Partition Management: nPars, vPars, & Integrity VM’s",
		"school": "HP",
		"dates": "2008",
		"url": ""
	},
{
		"title": "HP ServiceCenter 6.2",
		"school": "HP",
		"dates": "2007",
		"url": ""
	},
{
		"title": "OpenView VantagePoint Operations 1 & 2, Hewlett-Packard",
		"school": "HP",
		"dates": "2001",
		"url": ""
	},


 {
		"title": "LAN WAN Internetworking, Frame Relay and Wide Area Networks, Applying Network Management using SNMP, VoIP Concepts and Devices, Implementation and Support of Microsoft Exchange Server 5.5, Upgrading to Microsoft Windows 2000, Cisco Internetwork Operating System (IOS). Configuring Protocols on a Cisco Router, Cisco Advanced Router Configuration, Cisco Router Configuration, Cisco LAN Switches, Cisco Network Management",
		"school": "TCT Technical Training",
		"dates": "2001",
		"url": ""
	},

 {
		"title": "OpenView Network Node Manager 11 on HP-UX 10.2",
		"school": "HP",
		"dates": "2000",
		"url": ""
	},
 {
		"title": "Administering Windows NT 4.0, Supporting Windows NT 4.0 - Core Technologies, Microsoft Network Essentials, Internetworking with Microsoft TCP/IP on NT, Windows NT Server 4.0 in the Enterprise",
		"school": "MicroBus",
		"dates": "1999",
		"url": ""
	},
{
		"title": "Cisco Certified Network Associate",
		"school": "Dynamic Computer Associates",
		"dates": "1999",
		"url": ""
	}
	
	],
	//Display education in my resume page
	display: function() {
		for (edu in education.schools) {
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			var formattedNameAndDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameAndDegree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
			$(".education-entry:last").append(formattedDate);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			$(".education-entry:last").append(formattedLocation);
			if (education.schools[edu].majors.length > 0) {
				for (major in education.schools[edu].majors) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]);
					$(".education-entry:last").append(formattedMajor);
				}
			}

		}
		//online classes
		$('#education').append(HTMLonlineClasses)
		for (online in education.onlineCourses) {
			$('#education').append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			var formattedTitleAndSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleAndSchool);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
			$(".education-entry:last").append(formattedDate);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedURL);

		}

	}
}

work.display();
bio.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
