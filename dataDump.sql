-- MySQL dump 10.16  Distrib 10.1.38-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: db4.cs.uni-potsdam.de    Database: mm_provider_toolup
-- ------------------------------------------------------
-- Server version	10.0.38-MariaDB-0+deb8u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `mm_provider_toolup`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `mm_provider_toolup` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `mm_provider_toolup`;

--
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `application` (
  `uuid` varchar(64) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` longtext,
  `short_description` longtext,
  `contact` longtext,
  `provider` longtext,
  PRIMARY KEY (`uuid`),
  FULLTEXT KEY `fulltext` (`title`,`description`),
  FULLTEXT KEY `title` (`title`,`description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application`
--

LOCK TABLES `application` WRITE;
/*!40000 ALTER TABLE `application` DISABLE KEYS */;
INSERT INTO `application` VALUES ('application-1','Moodle[UP]','Unser Moodle (2. Generation) ist das Learning Management System der Universitaet Potsdam. Es handelt sich dabei um eine zentrale E-Learning-Plattform, welche von unserer Zeik verwaltet wird. Zur Einrichtung eines Kurses wenden Sie sich bitte an die Mitarbeiter der Zeik.',NULL,NULL,NULL),('application-10','Mail.UP','Die Webmail-Anwendung der Universitaet Potsdam mit der man kommunizieren und zusammenarbeiten kann. Die Funktionen stehen allen Studenten und Mitarbeitern der UP zur Verfuefung und die Daten liegen dabei auf universitaeren Servern.',NULL,NULL,NULL),('application-101','DOCKEREDITR','','fsdf','sdf','sdf'),('application-102','asfsdfssfsf','','fds','sdf','sdf'),('application-11','Pad.UP','Der Etherpad-Dienst ermoeglicht es mehreren Personen einen Text in Echtzeit unter sofortiger Anzeige aller aenderungen durch andere NutzerInnen, zu bearbeiten. aenderungen am Dokument werden dabei farblich gekennzeichnet, wobei jedem Nutzer eine Farbe zugeordnet wird. Ausserdem ermoeglicht parallel eine Chatfunktion die Kommunikation der Bearbeiter untereinander.',NULL,NULL,NULL),('application-12','Ilias','ILIAS ist eine freiverfuegbare Learning-Plattform aehnlich unserem Moodle. ',NULL,NULL,NULL),('application-13','Foodle[UP]','Foodle ist (analog zu Doodle) eine einfache Webanwendung mit der man Termine durch Abstimmungen planen und diese dann teilen kann. Natuerlich kann man auch jede andere Art von Umfrage dort machen. Foodle stammt von der Deutschen Forschungsgemeinschaft (DFN), was einen Schutz der persoenlichen Daten, die darin eingeben werden, bietet.',NULL,NULL,NULL),('application-14','Doodle','Mit Doodle kann man einfach und schnell Termine abstimmen und diese mit anderen Leuten teilen.',NULL,NULL,NULL),('application-15','Open Acess Journal','Das DOAJ ist ein Verzeichnis von Elektronischen Zeitschriften, welches von der Universitaetsbibliothek der Universitaet Lund in Schweden betrieben wird. Es ist im Web frei zugaenglich.',NULL,NULL,NULL),('application-16','Agilo','Agilo (auch: Agilo for Trac) ist eine freie, webbasierte Software. Sie unterstuetzt die agilo Entwicklungsmethode Scrum und basiert auf dem Fallbearbeitungssystem Trac. Sie ergaenzt die Anwendung Trac um viele nuetzliche Funktionen, wovon nur die wichtigsten oben genannt werden.',NULL,NULL,NULL),('application-17','Redmine','Redmine ist frei und webbasiert. Man kann damit Projekte managen, Wikis und Foren anlegen und es zur Ticketverwaltung und Dokumentablage nutzen. Das Konzept ist stark an Trac angelehnt und ist plattform- und datenbankunabhaengig. ',NULL,NULL,NULL),('application-18','Trac','Trac ist primaer fuer den Einsatz in Softwareprojekten gedacht, laesst sich aber auch anderweitig einsetzen. Zum Beispiel als reines Wiki. Durch die verschiedenen Funktionen laesst es sich auch fuer nicht in der Softwareentwicklung angesiedelte Projekte nutzen.',NULL,NULL,NULL),('application-19','DokuWiki','Die freie Wikisoftware ist besonders fuer geschlossenes Wikis mit begrenzten Nutzerkreis geeignet. Die Installation und Administration ist einfach gehalten und daher auch fuer Anfaenger leicht nutzbar. Es liegt keine Datenbank dahinter, sondern die Metadaten werden in einfachen Textdateien gespeichert. DokuWikis bieten einen stabilen Standard, der mit Plugins um Funktionen erweitert werden kann.',NULL,NULL,NULL),('application-2','Horde','Diese freie, webbasierte Groupware beinhaltet verschiedene Komponenten, die alle auf dem Horde Framework aufbauen. Die Komponenten finden sich in Form von Modulen wieder. Das E-Mail-Modul mit dem Horde-Webmail-Client und das Groupware-Modul mit Wikis, Kalender, Notizbuch, Dateimanager, etc. sind nur eine Auswahl der haeufig genutzten Funktionen.',NULL,NULL,NULL),('application-20','MediaWiki','Die frei verfuegbare Software verwaltet Inhalte in Form eines Wiki-Systems. Dadurch ist es jedem Nutzer moeglich den Inhalt des angelegten Wikis ueber den Browser zu aendern. Die Staerken von MediaWiki liegen bei Wikipedia aehnlichen Anwendungen und solche, die eine hohe Skalierbarkeit erfordern, da eine Datenbank im Hintergrund liegt.',NULL,NULL,NULL),('application-3','Wordpress','Wordpress bietet Ihnen die Moeglichkeit des Aufbaus und der Pflege eines sogenannten Weblogs. Man kann auf einfache Weise die Inhalte einer Website (Texte, Bilder, etc.) verwalten, indem man Beitraege anlegt und diese dann selbsterstellten Kategorien zuweist. Wordpress erzeugt dann automatisch die entsprechenden Navigationselemente. Zusaetzlich kann es hierarchische Seiten verwalten und kann als Content Management System eingesetzt werden.',NULL,NULL,NULL),('application-4','Dropbox','Dropbox ist ein sogenannter Cloud-Dienst, welcher ermoeglicht seine Daten zentral in einem externen Rechenzentrum zu speichern und von verschiedenen Orten auf die eigenen Daten in der Cloud (engl.: Wolke) zu zugreifen. Da die Daten bei privater Nutzung auf den Servern eines Fremdanbieters liegen, sollte die Ablage sensibler Daten vermieden werden.',NULL,NULL,NULL),('application-5','Box.UP','Box.UP ist ein Dienst der Universitaet Potsdam. Dabei handelt es sich um eine OwnCloud-basierte Anwendung. Bei einem Cloudspeicher werden Daten auf einem entfernten Rechenzentrum gespeichert um von verschiedenen Orten darauf zugreifen zu koennen. Dies ermoeglicht auch den Zugriff mehrerer Personen auf die gleichen Dateien. Der Vorteil des Dienstes der Uni Potsdam liegt darin, dass die Daten nicht in den Haenden Dritter liegen sondern auf Universitaets-eigenen Servern. Jedem Nutzer stehen 30GB Speicherplatz zur Verfuegung.',NULL,NULL,NULL),('application-6','Easy Chair','EasyChair ist ein Web-basiertes System, welches es ermoeglicht wissenschaftliche Konferenzen zu verwalten. Neben den oben genannten Funktionen bietet die Anwendung auch die Moeglichkeit Rollen zu verteilen um den verschiedenen Gruppen (Autoren, Session Chairs, u.a.) verschiedene Rechte zuzuweisen und die verschiedenen Personengruppen ueber einen E-Mail-Verteiler zu benachrichtigen.',NULL,NULL,NULL),('application-7','Typo3','Die Universitaet Potsdam nutzt Typo3 zur Pflege der universitaeren Webinhalte. Man kann auf diesem Wege einfach und ohne Programmierkenntnisse Websiten nach den eigenen Vorstellungen gestalten. Wenn Typo3 auf einem Webserver installiert ist, kann es ohne weitere Zusatzsoftware im Browser genutzt werden.',NULL,NULL,NULL),('application-8','Mahara','Die netzbasierte Sammelmappe bietet die Moeglichkeit die eigenen Lernfortschritte fuer sich und andere zu dokumentieren, um den Lernfortschritt zu reflektieren und die eigenen Staerken und Schwaechen daraus abzuleiten. Ausserdem bietet Sie auch eine Plattform um gemeinsam Aufgaben zu loesen.',NULL,NULL,NULL),('application-9','Open Exchange','Die Linux-basierte E-Mail- und Groupware-Loesung wurde als Alternative zu Micorsoft Exchange entwickelt. Die mittlerweile zu OX App Suite weiterentwickelte Kollaborationssoftware beinhaltet App zum Bearbeiten von E-Mails, Kontakten und Termine, sowie zum Verwalten von Bilder, Audio-, Video- und Office-Dateien.',NULL,NULL,NULL);
/*!40000 ALTER TABLE `application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `application_belongs_to_category`
--

DROP TABLE IF EXISTS `application_belongs_to_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `application_belongs_to_category` (
  `application_uuid` varchar(64) NOT NULL,
  `category_uuid` varchar(64) NOT NULL,
  PRIMARY KEY (`application_uuid`,`category_uuid`),
  KEY `fk_catprog_programs1_idx` (`application_uuid`),
  KEY `category_fk_idx` (`category_uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application_belongs_to_category`
--

LOCK TABLES `application_belongs_to_category` WRITE;
/*!40000 ALTER TABLE `application_belongs_to_category` DISABLE KEYS */;
INSERT INTO `application_belongs_to_category` VALUES ('application-1','category-7'),('application-10','category-6'),('application-11','category-6'),('application-12','category-7'),('application-13','category-8'),('application-14','category-8'),('application-15','category-9'),('application-16','category-10'),('application-17','category-10'),('application-18','category-10'),('application-19','category-11'),('application-2','category-6'),('application-20','category-11'),('application-3','category-1'),('application-3','category-4'),('application-4','category-2'),('application-5','category-2'),('application-6','category-3'),('application-7','category-4'),('application-8','category-5'),('application-9','category-6');
/*!40000 ALTER TABLE `application_belongs_to_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `application_has_feature`
--

DROP TABLE IF EXISTS `application_has_feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `application_has_feature` (
  `application_uuid` varchar(64) NOT NULL,
  `feature_uuid` varchar(64) NOT NULL,
  PRIMARY KEY (`application_uuid`,`feature_uuid`),
  KEY `fk_functionprog_programs_idx` (`application_uuid`),
  KEY `feature_idx` (`feature_uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application_has_feature`
--

LOCK TABLES `application_has_feature` WRITE;
/*!40000 ALTER TABLE `application_has_feature` DISABLE KEYS */;
INSERT INTO `application_has_feature` VALUES ('application-1','feature-10'),('application-1','feature-11'),('application-1','feature-12'),('application-1','feature-14'),('application-1','feature-15'),('application-1','feature-16'),('application-1','feature-20'),('application-1','feature-21'),('application-1','feature-22'),('application-1','feature-23'),('application-1','feature-24'),('application-1','feature-3'),('application-1','feature-4'),('application-1','feature-7'),('application-1','feature-8'),('application-10','feature-4'),('application-10','feature-5'),('application-10','feature-9'),('application-11','feature-11'),('application-11','feature-14'),('application-12','feature-10'),('application-12','feature-11'),('application-12','feature-12'),('application-12','feature-15'),('application-12','feature-16'),('application-12','feature-20'),('application-12','feature-21'),('application-12','feature-22'),('application-12','feature-23'),('application-12','feature-24'),('application-12','feature-3'),('application-12','feature-8'),('application-13','feature-3'),('application-13','feature-4'),('application-14','feature-3'),('application-14','feature-4'),('application-15','feature-1'),('application-16','feature-13'),('application-17','feature-13'),('application-17','feature-23'),('application-17','feature-8'),('application-18','feature-13'),('application-19','feature-14'),('application-19','feature-21'),('application-19','feature-23'),('application-19','feature-24'),('application-2','feature-13'),('application-2','feature-14'),('application-2','feature-4'),('application-2','feature-9'),('application-20','feature-14'),('application-20','feature-21'),('application-20','feature-22'),('application-20','feature-23'),('application-20','feature-24'),('application-261e96a3-13a8-4f43-a162-1698c514ae42','feature-79be204d-909b-4da8-a128-26b1583f72c4'),('application-37a7bfbd-9a78-43af-9f1f-3746d24de6fa','feature-d750b7e1-5c39-483a-ad84-6ff487f50500'),('application-3ee30bc3-e1ea-4128-8e89-65a5fd7ec724','feature-327b12f5-8268-43f3-bfc5-d861f8b07fef'),('application-4','feature-12'),('application-4','feature-22'),('application-5','feature-12'),('application-5','feature-22'),('application-5503ba2b-efe2-4f35-b797-130470d57e06','feature-d50865d3-eb1c-4736-9af9-b8dccdba8f2d'),('application-5e145d86-16c7-44d9-91e1-6803147f04ac','feature-54022362-c7b6-4073-9398-9aae0bb26bae'),('application-6','feature-1'),('application-6','feature-14'),('application-6','feature-2'),('application-63339e0c-4182-4ac7-ac80-8497281a4b57','feature-f8f4d10d-7f67-4d54-abdf-42e747116b48'),('application-7','feature-21'),('application-7','feature-22'),('application-7','feature-23'),('application-7','feature-24'),('application-70463034-ef94-479e-a109-6bcf75945686','feature-ab438693-131f-49c2-a1cd-cbb41bd63877'),('application-75f5b564-4935-4ddb-8c07-604d2da793a0','feature-e3e28b71-c9de-4674-ae48-c13c205581ef'),('application-762b7da0-ecc4-43b2-bf18-dbf40bc8eb1d','feature-a3fa3208-67f7-4f13-b66f-308caeaadb17'),('application-8','feature-14'),('application-8','feature-17'),('application-8','feature-23'),('application-8346bfa3-e809-4f17-904b-c37bda20079b','feature-35d37691-3bac-42fd-bc9f-8e86c38bab4c'),('application-843b679e-ba23-4012-acae-16c6894a6ae9','feature-83058693-50db-4f65-9a28-1db2233b16ae'),('application-86ad01a0-4ff8-4178-8004-3cbac0f76b54','feature-ead15436-d0a1-449d-819e-8af239b40d3c'),('application-9','feature-23'),('application-9','feature-4'),('application-9','feature-9'),('application-a1f141ff-9a05-44aa-9170-445358b39bdf','feature-19f0bffa-1dfc-4011-9ee6-d528b194c85a'),('application-a9d57695-d96a-4ddd-93f6-b351a81726a4','feature-cdf1d23e-5d17-4c5c-ac79-a20e4cd7e99a'),('application-ae8704f1-297a-4144-8da1-bc6b9108af27','feature-c7fe89d5-b0f8-4a69-b3e9-ec37f37e8ef6'),('application-afc85094-2fc6-44c4-8e5e-533da871d052','feature-adb48ea9-b5e4-40ed-8692-b27fcb4009cb'),('application-aff53f8d-33db-4c64-86e7-d4ec1809ccf5','feature-e556ab72-27d9-448d-9019-82a1d20caeb5'),('application-b464c6e3-8417-49a5-b343-7c27ce26a65c','feature-32367395-28c5-47f4-8a7d-3800a2e3d6a6'),('application-d836ed6f-ebd0-46db-b77d-08fe6bcd8b9f','feature-84c8fe47-4b65-48bd-a125-29c248e7070f'),('application-efb6fc7a-3786-4feb-b08f-870fd698beaa','feature-029ca89f-bccf-491e-85fd-224763a3b46b'),('application-f734abc0-a737-4f47-aa61-4807dc02c453','feature-22099b36-4cf9-4f21-93d1-756243b4ad91');
/*!40000 ALTER TABLE `application_has_feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `uuid` varchar(64) NOT NULL,
  `title` varchar(128) NOT NULL,
  `description` longtext,
  `supercategory` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`uuid`),
  KEY `supercategory_idx` (`supercategory`),
  FULLTEXT KEY `fulltext` (`title`,`description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('category-1','Blog','Erfarungsberichte und Meinungen koennen veroeffentlicht werden','category-12'),('category-10','Project Management Tool','Tools fuer das Planen, Steuern und Kontrollieren von Projektarbeiten','category-12'),('category-11','Wiki','Wissensspeicher, der von den Lernenden aktiv erweitert wird','category-12'),('category-12','Inhaltsverwaltung',NULL,NULL),('category-13','Terminverwaltung',NULL,NULL),('category-19','Kursorganisation',NULL,NULL),('category-2','Cloud-Speicher','Cloudspeicher ermoeglichen einen Fernzugriff auf gespeicherte Daten','category-12'),('category-20','Groupware Test','Groupware Testbeschreibung','category-6'),('category-3','Conference System Tool','Tools für die Foerderung von Kommunikation inn Gruppenarbeiten','category-13'),('category-4','Content Management System','Erstellung und Bearbeitung von gemeinsamen Inhalten','category-12'),('category-5','E-Portfolio','Eignet sich zur Organisation der Lernmaterialen und kann den Lernprozess darstellen','category-13'),('category-6','Groupware','Unterstuetzt Gruppenarbeit','category-12'),('category-7','Learning Management System','Lernplattformen dienen zur Organisatuion der Lehrmaterialen und zur Kommunikation mit den Lernenden','category-19'),('category-8','Online-Terminplaner','Termine koennen online von den Lernenden eingesehen werden','category-13'),('category-9','Open Access Journals','Frei zur Verfuegung stehende wissenschaftliche Fachzeitschriften','category-13');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feature`
--

DROP TABLE IF EXISTS `feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feature` (
  `uuid` varchar(64) NOT NULL,
  `title` varchar(128) NOT NULL,
  `description` longtext,
  PRIMARY KEY (`uuid`),
  FULLTEXT KEY `title` (`title`,`description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature`
--

LOCK TABLES `feature` WRITE;
/*!40000 ALTER TABLE `feature` DISABLE KEYS */;
INSERT INTO `feature` VALUES ('feature-1','wissenschaftliche Arbeiten veroeffentlichen',NULL),('feature-10','intern Mitteilungen schreiben',NULL),('feature-11','miteinander chatten',NULL),('feature-12','geteilte Materialablage',NULL),('feature-13','gemeinsame Softwareprojekte bearbeiten',NULL),('feature-14','gemeinsam Dokumente bearbeiten',NULL),('feature-15','Kurse anlegen und verwalten',NULL),('feature-16','E-Pruefungen durchfuehren',NULL),('feature-17','eine persoenliche Lernumgebung einrichten ',NULL),('feature-2','wissenschaftliche Konferenzen verwalten',NULL),('feature-20','Aufzeichnung einbinden',NULL),('feature-21','Verlinkung von Inhalten',NULL),('feature-22','Dateien ablegen und verwalten',NULL),('feature-23','Dokumente ablegen und verwalten',NULL),('feature-24','Beitraege erstellen und verwalten',NULL),('feature-3','Termine planen',NULL),('feature-4','Termine teilen',NULL),('feature-5','Kalender anlegen',NULL),('feature-6','Kurs evaluieren',NULL),('feature-7','Umfrage machen',NULL),('feature-8','Foren anlegen',NULL),('feature-9','E-Mails schreiben',NULL);
/*!40000 ALTER TABLE `feature` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-26  7:41:39
