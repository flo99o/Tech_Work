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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
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
  `description_compagny` varchar(20000) NOT NULL,
  `description_position` varchar(20000) NOT NULL,
  `prerequisite` longtext,
  `wage` varchar(45) NOT NULL,
  `release_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `contract` varchar(100) NOT NULL,
  `location` varchar(250) NOT NULL DEFAULT 'Paris',
  `compagny_id` int(11) NOT NULL,
  `logo` varchar(10000) NOT NULL DEFAULT 'https://www.ficosa.com/wp-content/uploads/2017/01/business-briefcase.png',
  PRIMARY KEY (`offerID`),
  KEY `fk_offers_1_idx` (`compagny_id`),
  CONSTRAINT `fk_offers_1` FOREIGN KEY (`compagny_id`) REFERENCES `compagnies` (`compagnyID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (1,'Développeur front-end','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','aucun','3000','2020-10-06 12:42:02','Alternance','Paris',1,'https://actufinance.fr/wp-content/uploads/2016/12/logo-lcl-696x465.jpg'),(2,'Designer','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Bac +2','2500','2020-10-06 12:45:19','CDI','Ivry-sur-Seine',2,'https://www.creads.fr/app/uploads/sites/1/2014/08/google_avatar_canalplus.jpg'),(3,'Développeur backend','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','aucun','4000','2020-10-06 12:45:19','CDD','Bordeaux',3,'https://cdn.1min30.com/wp-content/uploads/2018/06/logo-Conforama-1.jpg'),(4,'Développeur backend','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','aucun','1500','2020-10-06 12:45:19','CDD','Bordeaux',3,'https://cdn.1min30.com/wp-content/uploads/2018/06/logo-Conforama-1.jpg'),(11,'Développeur backend','Mango est une société espagnole spécialisée dans la conception, la fabrication et à la commercialisation via des franchises de vêtements et accessoires pour femme, pour homme et plus récemment pour enfant. Depuis l\'ouverture du premier magasin en 19841 par Isak Andic et Enric Casi2, la marque s\'est implantée dans plusieurs pays, dont une centaine de magasins en France3.','Au sein de l’équipe tech, tu prendras une part active à la conception et au développement des fonctionnalités et de l’architecture de la plateforme Keplr.\n\nEn tant que Backend Software Engineer, tu seras notamment en charge de :\n\nDévelopper des applications hautement disponibles et supportant des montées en charge\nContribuer à l’amélioration constante de l’architecture logicielle de la plateforme\nAssurer une qualité de code en ligne avec les standards Kepler\nParticiper à des projets transverses impliquant des équipes pluridisciplinaires\n\nSelon ton profil, ton expérience et tes envies, tu pourras également partager tes connaissances et accompagner la montée en compétence des membres juniors de l’équipe.','aucun','1762','2020-10-08 22:05:07','CDI','Lille',4,'https://www.marketing-etudiant.fr/images/thematiques/icones/logo-3.jpg');
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
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'tracy','zumbu','','tracyzumbu@lilo.org','https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png','admin','','non renseigné'),(2,'Manon','Dupont','','manondupont@gmail.com','https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png','user',NULL,'0640404040'),(3,'Jean','Duclos',NULL,'jduclos@lcl.com','https://www.ficosa.com/wp-content/uploads/2017/01/business-briefcase.png','compagny','LCL','0630303030');
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

-- Dump completed on 2020-10-09 11:29:18
