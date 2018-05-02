import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  education = [
    {
      "programName": "Business Intelligence and System Infrastructure",
      "collegeName": "Algonquin College",
      "graduationYear": 2016,
      "courses": [
        "Predictive Modeling",
        "Business Intelligence (IBM Cognos BI)",
        "Natural Language Processing (Watson)",
        "Data Modeling (IBM SPSS Modler)",
        "Data Analytics (IBM SPSS Statistics)",
        "Data Visualization (Tableau)",
        "SQL (Oracle 12c)"
      ]
    },
    {
      "programName": "Interactive Multimedia Management",
      "collegeName": "Algonquin College",
      "graduationYear": 2015,
      "courses": [
        "Principles of Design",
        "Prototyping & Wireframing ",
        "Motion Graphics",
        "Videography & Photography",
        "Photo & video editing",
        "Google Analytics (SEO)"
      ]
    },
    {
      "programName": "Bachelor of Computer Application",
      "collegeName": "Panjab University",
      "graduationYear": 2014,
      "courses": [
        "computer networking",
        "programming fundamentals",
        "data structures & algorithms",
        "discreet mathematics",
        "web programming",
        "project management",
        "agile, waterfall, and scrum"
      ]
    }
  ]

  skills = [
    {
      "group": "design",
      "skill": [
        "Adobe Photoshop",
        "Adobe Aftereffects",
        "Adobe Illustrator",
        "Sketch",
        "Blasmiq"
      ],
    },
    {
      "group": "programming",
      "skill": [
        "Java",
        "JavaScript",
        "typeScript",
        "HTML 5",
        "CSS 3",
        "Python",
        "php",
        "Swift",
        "SQL"
      ],
    },
    {
      "group": "frameworks",
      "skill": [
        "Flask",
        "Less",
        "SASS",
        "Angular2+",
        "WordPress",
        "React",
        "Bootstrap",
        "MEAN",
        "node.js",
        "npm",
        "webpack"
      ]
    },
    {
      "group": "databases",
      "skill": [
        "mongoDB",
        "Oracle 11g/12c",
        "MS SQL",
        "MySQL"
      ]
    },
    {
      "group": "IDE",
      "skill": [
        "Sublime Text",
        "Eclipse",
        "Netbeans",
        "VS code",
        "X-Code"

      ]
    },
    {
      "group": "learning",
      "skill": [
        "AWS",
        "machine learning"
      ]
    }
  ]

  experience = [
    {
      "title": "front end developer",
      "company": "the denrich group",
      "year": "September-2015 to August-2017",
      "place": "Ottawa, ON",
      "role": [
        "Creating pixel perfect, reusable, extensible, flexible, high-performing front-end experiences that integrate seamlessly with back-end code",
        "Assisting in Designing and developing entire business website for the company",
        "Developing and customizing of WordPress sites using custom or template themes",
        "PHP application development, writing custom theme functionality ",
        "Integration of content into wordPress themes",
        "Front-end interface development of WordPress themes using  HTML, CSS, PHP and JavaScript",
        "Workflow tools included: HTML, CSS, Bootstrap, jQuery, Angular.js, Angular2 and Git"
      ]
    },
    // {
    //   "title": "multi server cognos bi project lead",
    //   "company": "canada reveneu agency",
    //   "year": "Nevember-2015 to April-2016",
    //   "role": [
    //     "As a team lead collectively planned, installed, configured, documented, troubleshot, secure and test a distributed Cognos BI System",
    //     "Delivered a fully functional system that was fully compliant with the documented requirements and specifications",
    //     "A high level installation and configuration plan which outlines at a high level the installation and configuration steps",
    //     "Used LDAP and Mail server services, assigned static IP addresses to NATed VMs",
    //     "Documented diagram showing the logical topology of our BI system, Baseline start up events and log files"
    //   ]
    // },
    {
      "title": "java developer",
      "company": "nucleus software",
      "year": "May-2013 to October-2014",
      "place": "Noida, IN",
      "role": [
        "Worked on interfacing of core product with Posidex technologies for external duplicity",
        "Explored new horizons of Banking fundamentals with majors in lending",
        "Working on web-services based on soap for interfacing with other technology partners of clients",
        "Worked on core product improvisation based on spring, hibernate (for instance, General-Ledger file)",
        "Generated metadata layer over the main schema for clients for partial database access"

      ]
    },

    {
      "title": "developer associate",
      "company": "panjab university",
      "year": "April-2012 to April-2013",
      "place": "Chandigarh, IN",
      "role": [
        "Communicated directly with clients to establish project parameters and wrote proposals",
        "Developed stunning websites using HTML, CSS and JavaScript",
        "Used tools like Balsamic for designing wireframes and sketches",
        "Developed and implemented email marketing campaigns for various clients",
        "Prepared and delivered weekly project status presentations to upper management",
        "Made sure marketing messages were mobile phone friendly",
        "Built user-interactive web pages using jQuery plugins AJAX, JSON, and JavaScript"
      ]
    },
    {
      "title": "assistant programmer",
      "company": "swami vivekanand group of institutes",
      "year": "Mar-2011 to October-2012",
      "place": "Punjab, IN",
      "role": [
        "Worked as a part of a project team to coordinated database development wrote data dictionaries",
        "Determined project scope limitations and data models",
        "Specified used and user access levels for each segment of database using PL/SQL",
        "Developed web presentation layer as a front end developer using HTML,CSS, JavaScript and jQuery",
        "Wrote complex SQL queries to perform multiple operations on different databases",
        "Documented work in production and development environment"
      ]
    },
  ]

  certifications = [
    {
      "name": "introduction to bootstrap",
      "organization": "microsoft",
      "year" : 2015,
      "tech":[
        "implementation of bootstrap in existing web sites",
        "common bootstrap components",
        "bootstrap themes"
      ]
    },
    {
      "name": "programming in python",
      "organization": "university of michigan",
      "year": 2014,
      "tech":[
        "python programming",
        "human-Computer interaction",
        "debugging",
        "problem solving",
        "functional programming"
      ]
    },
    {
      "name": "introduction to linux",
      "organization":"linux foudation",
      "year": 2014,
      "tech":[
        "working knowledge of Linux",
        "navigate through major Linux distributions",
        "System configurations and graphical interface of Linux",
        "Basic command line operations",
        "Common applications of Linux"
      ]
    },
    {
      "name": "Programming Foundations: Object-Oriented Design",
      "organization":"linkedin learning",
      "year": 2014,
      "tech":[
        "Why use object-oriented design (OOD)?",
        "Pinpointing use cases, actors, and scenarios",
        "Identifying class responsibilities and relationships",
        "Creating class diagrams",
        "Using abstract classes",
        "Working with inheritance",
        "Creating advanced UML diagrams",
        "Understanding object-oriented design principles",
        "java programming"
      ]
    },


    

  ]


  constructor() {

  }

  ngOnInit() {

  }
}
