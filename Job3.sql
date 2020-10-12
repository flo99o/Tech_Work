-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: Job
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `application` (
  `applicationID` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `cover_letter` longtext NOT NULL,
  `phone` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `offer_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`applicationID`),
  KEY `fk_application_1_idx` (`offer_id`),
  KEY `fk_application_2_idx` (`user_id`),
  CONSTRAINT `fk_application_1` FOREIGN KEY (`offer_id`) REFERENCES `offers` (`offerID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_application_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application`
--

LOCK TABLES `application` WRITE;
/*!40000 ALTER TABLE `application` DISABLE KEYS */;
/*!40000 ALTER TABLE `application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compagnies`
--

DROP TABLE IF EXISTS `compagnies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compagnies` (
  `compagnyID` int(11) NOT NULL AUTO_INCREMENT,
  `compagny_name` varchar(45) NOT NULL,
  PRIMARY KEY (`compagnyID`),
  KEY `fk_compagnies_1_idx` (`compagny_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compagnies`
--

LOCK TABLES `compagnies` WRITE;
/*!40000 ALTER TABLE `compagnies` DISABLE KEYS */;
INSERT INTO `compagnies` VALUES (2,'Canal+'),(3,'Conforama'),(1,'LCL'),(4,'Mango');
/*!40000 ALTER TABLE `compagnies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offers` (
  `offerID` int(11) NOT NULL AUTO_INCREMENT,
  `job_name` varchar(450) NOT NULL,
  `description_position` varchar(20000) NOT NULL,
  `prerequisite` longtext,
  `wage` varchar(45) NOT NULL,
  `release_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `contract` varchar(100) NOT NULL,
  `location` varchar(250) NOT NULL DEFAULT 'Paris',
  `compagny_id` int(11) NOT NULL DEFAULT '1',
  `user_id` int(11) NOT NULL DEFAULT '3',
  PRIMARY KEY (`offerID`),
  KEY `fk_offers_1_idx` (`compagny_id`),
  CONSTRAINT `fk_offers_1` FOREIGN KEY (`compagny_id`) REFERENCES `compagnies` (`compagnyID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (1,'Développeur front-end','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','aucun','3000','2020-10-06 12:42:02','Alternance','Paris',1,3),(2,'Designer','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Bac +2','2500','2020-10-06 12:45:19','CDI','Ivry-sur-Seine',2,4),(3,'Développeur backend','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','aucun','4000','2020-10-06 12:45:19','CDD','Bordeaux',3,5),(4,'Développeur backend','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','aucun','1500','2020-10-06 12:45:19','CDD','Bordeaux',3,5),(11,'Développeur backend','Au sein de l’équipe tech, tu prendras une part active à la conception et au développement des fonctionnalités et de l’architecture de la plateforme Keplr.\n\nEn tant que Backend Software Engineer, tu seras notamment en charge de :\n\nDévelopper des applications hautement disponibles et supportant des montées en charge\nContribuer à l’amélioration constante de l’architecture logicielle de la plateforme\nAssurer une qualité de code en ligne avec les standards Kepler\nParticiper à des projets transverses impliquant des équipes pluridisciplinaires\n\nSelon ton profil, ton expérience et tes envies, tu pourras également partager tes connaissances et accompagner la montée en compétence des membres juniors de l’équipe.','aucun','1762','2020-10-08 22:05:07','CDI','Lille',4,6),(13,'Développeur frontend','Très intéressé(e) par les technologies et par les projets, votre profil polyvalent fait de vous une clé de voute autour du projet. Vous aimez travailler dans des contextes variés et souhaitez en permanence découvrir de nouvelles problématiques, de nouveaux challenges.\n\nVous êtes à l’aise sur Symfony, Docker, Git et avec la mise en place et l’utilisation de Web Service, MySQL, vous êtes sensible à la qualité, l’intégration continue et vous possédez de bonnes bases en frontend HTML 5/CSS 3, jQuery/Prototype/Vue.js, responsive design…','Bac+2 \nMaitrise de React','1200','2020-10-09 11:42:18','Alternance','Paris',1,3);
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(250) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `logo` varchar(10000) NOT NULL DEFAULT 'https://www.ficosa.com/wp-content/uploads/2017/01/business-briefcase.png',
  `type` varchar(45) NOT NULL DEFAULT 'user',
  `compagny_name` varchar(45) DEFAULT NULL,
  `phone` varchar(45) NOT NULL DEFAULT 'Non renseigné',
  `description_compagny` varchar(4500) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'tracy','zumbu','','tracyzumbu@lilo.org','https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png','admin','','non renseigné',NULL),(2,'Manon','Dupont','','manondupont@gmail.com','https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png','user',NULL,'0640404040',NULL),(3,'Jean','Duclos',NULL,'jduclos@lcl.com','https://actufinance.fr/wp-content/uploads/2016/12/logo-lcl.jpg','compagny','LCL','0630303030','Le Crédit lyonnais, société anonyme, connue sous son appellation commerciale LCL depuis 2005, est une banque française fondée à Lyon en 1863 par François Barthélemy Arlès-Dufour et Henri Germain. Elle est considérée comme l\'un des trois piliers de l\'industrie bancaire française, faisant partie des « Trois Vieilles » avec la BNP Paribas et la Société générale. '),(4,'Pauline','Drous','','pdrous@canal.com','data:image/png;base64,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','compagny','Canal+','0707070707','Canal+ est une chaîne de télévision généraliste nationale française privée à péage, axée sur le cinéma et le sport. Lancée le 4 novembre 1984 par Havas, elle fut la toute première chaîne privée à péage en France. Elle appartient à la Société d\'Édition de Canal Plus filiale du groupe Vivendi. '),(5,'Hugo','Sab','','hsab@conforame.com','data:image/png;base64,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','compagny','Conforama','0654546576','Conforama est un détaillant de mobilier et objets de décoration en kit, d\'origine française, filiale du groupe franco-autrichien Mobilux. Elle a été une filiale du groupe sud-africain Steinhoff International jusqu\'en juillet 2020. '),(6,'Mateo','Loupat',NULL,'mloupat@mango','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3PvKTtl0jbfhCVWgvHqffBYSXxex7zdDmZw&usqp=CAU','compagny','Mango','0940494849','Mango est une société espagnole spécialisée dans la conception, la fabrication et à la commercialisation via des franchises de vêtements et accessoires pour femme, pour homme et plus récemment pour enfant. Depuis l\'ouverture du premier magasin en 19841 par Isak Andic et Enric Casi2, la marque s\'est implantée dans plusieurs pays, dont une centaine de magasins en France3.');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-09 14:35:24
