var work = {
	"jobs": [{
		"employer": "FCT",
		"title": "Enterprise System Engineer",
		"location": "Ottawa, Ontario",
		"dates": "February 2011 - Present",
		"description": [ "Working as a key Enterprise System Management Specialist to develop and maintain the HP Enterprise Monitoring Infrastructure to monitor key applications and infrastructure.", "Developed automation scripts for DR LUN                         refreshes and OS Cluster software patches. Automated the failover of clusters, shutdown and startup of Cluster servers. Automation saved over 20 hours of Operations effort monthly.", "Customized TQL and python                                 discovery scripts in uCMDB to provide insight into health, availability and to identify configuration changes.", 
                        "Developed an integration to capture email messages from IT infrastructure elements to alert Operations. This increased visibility to elements that had no current integrations or would require significant effort to                            integrate. ","Developed disk space automation script to be used for daily health check and was leveraged to identify over 60 TB of SAN space that could be recovered. ", "Utilized enrichment and TQL within the UCMDB to                         develop application models illustrating Business Processes and IT infrastructure to assist in root cause analysis and impact assessment. ",
                        "Migrated and upgraded HP Enterprise Management Software components to new data center this included BSM, BPM, SiteScope, DDM, UCMDB and HPOM maintaining the same functionality and design.",
                        "Build integration for BSM/OMI to integrate with OMW, SiteScope and UCMDB.  Developed OMI to illustrate Health Indicators, Models from CI’s discovered from UCMDB and leveraged groovy scripts within Omi to assist in                            customization of event message attributes.",
                        "Developed DDM scripts within UCMDB to aid discovery of device dependencies, reporting, and auditing purposes.",
                        "Developed flexible WMI Windows Event Log Perl script that was utilized to query the enterprise for troubleshooting and analysis.",
                        "Improved efficiencies for device configuration management by developing drivers for Network Automation using Network Driver Studio."]

	}, //{
		//"employer": "CT Consulting",
		//"title": "Enterprise System Management Consultant",
		//"location": "Montreal ,Quebec",
		//"dates": "April 2011-Octber 2012",
		//"description": "Key member to architect and engineer Enterprise Management Appliances for Network, Storage and Operations Management. Main objective was to develop appliances to enable rapid deployment and utilizing best monitoring practices for small and mid sized customers."
	//}
	//,
	 {
		"employer": "Toyota Motor Manufacturing Canada",
		"title": "Senior System Engineer",
		"location": "Cambridge, Ontario",
		"dates": "May 2010 - February 2011",
		//"description": "Designed and implemented an application for an international reference pricing for pharmacy industry to analyze revenue for different scenarios in cloud platform salesforce.com using Apex and Java script, Jquery, HTML5. Using Agile method to develop and Git repository tools" + "\n" + "Research about column oriented data base and SQL server 2013" + "\n" + "Research about could platforms and their usages"
		"description" : [  "Key Member to maintain and develop the Enterprise Monitoring Infrastructure to monitor key applications and IT infrastructure. Toyota relies on the monitoring infrastructure to ensure availability and to assist in                             confirmation to ensure production readiness.", "Upgraded the components of the BMC monitoring software suite and enhanced the integration connectors.", "Maintained and supported the Mission Critical HP-UX systems                              running on mid-range Itanium servers. This included HP-UX servers configured with Metro cluster.",
                            "Provisioned and supported the Storage Area Network and Storage Arrays. The environment is configured for High Availability and DR and utilizes HP Continuous Access and leverages a multi fabric SAN environment."]
	}, {
		"employer": "CIBC",
		"title": " Senior Enterprise Engineer",
		"location": "Toronto, Ontario",
		"dates": "June 2009 - April 2010",
		//"description": "Designed and implemented an application to analysis the result given from<br> the sensor attached to the human body and plot the movement in real time in Java"
		"description": [ "test"]
		}],
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
	"role": "Enterprise System Engineer",
	"contacts": {
		"mobile": "905-699-1765",
		"email": "craig.Janzen@gmail.com",
		//"github": "www.github.com/sahelmastoureshgh",
		"location": "1347 McGuffin Gate, Milton, Ontario"
	},
	"welcomeMessage": "Technical consultant focused on Enterprise System Management and Automation.",
	"skills": [
	    
	    "Operating Systems", "SAN Technologies", "Networking", "Databases", "Programming", "Enterprise Management Software"
	//	"HP Software, and Windows, BSM OMi, SiteScope DDMa, UCMDB" , "web development", "JS", "MongoDB", "Java"
	],
	"bioPic": "https://googledrive.com/host/0B8MhXMHIff4fTXJOQ0FRbGYxX2c",

	//Dispay bio json object in resume page
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
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
		"title": "TBD",
		"dates": "November 2013",
		"description": "To be updated.",
//	    "description": "to be updated",
		//"images": ['http://i.imgur.com/PhC5STL.png']
        "images" : ""
	}],
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
	"onlineCourses": [{
		"title": "Symmetrix Integration with VMware vSphere",
		"school": "EMC",
		"dates": "December 2014",
		"url": "http://www.emc.com/collateral/hardware/white-papers/h8115-vmware-vstorage-vmax-wp.pdf"
	},
	{
		"title": "VMware vSphere: What's New [V5.1]",
		"school": "VMWARE",
		"dates": "May 2013",
		"url": "https://mylearn.vmware.com/mgrreg/courses.cfm?ui=www_edu&a=one&id_subject=38605"
	},


	{
		"title": "PowerShell for the IT Administrator",
		"school": "Microsoft",
		"dates": "April 2013",
		"url": "http://www.microsoft.com/netherlands/microsoftuniversity/detail.aspx?id=28&category=workshop"
	}, {
		"title": "Configuration Management System 9.x Advanced",
		"school": "HP",
		"dates": "February 2013",
		"url": "http://h20546.www2.hp.com/main/get_file.cfm?code=9090&file=UCMDB350-90-Outline-A.pdf&sitepick=DU"

	}, {
		"title": "HP - Universal CMDB 9.x Essentials training",
		"school": "HP",
		"dates": "May 2012",
		"url": ""
	}],
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