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
-- Table structure for table `compagnies`
--

DROP TABLE IF EXISTS `compagnies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compagnies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `compagny_name` varchar(45) NOT NULL,
  `image` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compagnies`
--

LOCK TABLES `compagnies` WRITE;
/*!40000 ALTER TABLE `compagnies` DISABLE KEYS */;
INSERT INTO `compagnies` VALUES (1,'LCL','https://actufinance.fr/wp-content/uploads/2016/12/logo-lcl-696x465.jpg'),(2,'Canal+','data:image/jpeg;base64,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'),(3,'Conforama','https://cdn.1min30.com/wp-content/uploads/2018/06/logo-Conforama-1.jpg');
/*!40000 ALTER TABLE `compagnies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cover_letter` tinyint(4) DEFAULT NULL,
  `cv` tinyint(4) DEFAULT NULL,
  `portfolio` tinyint(4) DEFAULT NULL,
  `offer_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_documents_1_idx` (`offer_id`),
  CONSTRAINT `fk_documents_1` FOREIGN KEY (`offer_id`) REFERENCES `offers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description_compagny` longtext NOT NULL,
  `description_position` longtext NOT NULL,
  `prerequisite` longtext NOT NULL,
  `wage` float NOT NULL,
  `limit_date` timestamp NULL DEFAULT NULL,
  `compagny_id` int(11) DEFAULT NULL,
  `release_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `recruiter_id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `ville` varchar(250) NOT NULL DEFAULT 'Paris',
  PRIMARY KEY (`id`),
  KEY `fk_offers_1_idx` (`compagny_id`),
  KEY `fk_offers_2_idx` (`recruiter_id`),
  CONSTRAINT `fk_offers_1` FOREIGN KEY (`compagny_id`) REFERENCES `compagnies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_offers_2` FOREIGN KEY (`recruiter_id`) REFERENCES `recruiter` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (1,'Développeur front-end','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','aucun',3000,'2020-10-29 23:00:00',1,'2020-10-06 12:42:02',1,'Alternance','Paris'),(2,'Designer','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Bac +2',2500,'2020-11-30 23:00:00',2,'2020-10-06 12:45:19',2,'CDI','Ivry-sur-Seine'),(3,'Développeur back-end','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','aucun',4000,'2020-11-08 23:00:00',3,'2020-10-06 12:45:19',3,'CDD','Bordeaux'),(4,'Développeur back-end','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','aucun',1500,'2020-11-08 23:00:00',3,'2020-10-06 12:45:19',3,'CDD','Bordeaux');
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter`
--

DROP TABLE IF EXISTS `recruiter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `supervisor_name` varchar(200) DEFAULT NULL,
  `phone` int(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `compagny_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_UNIQUE` (`phone`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_recruiter_1_idx` (`compagny_id`),
  CONSTRAINT `fk_recruiter_1` FOREIGN KEY (`compagny_id`) REFERENCES `compagnies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter`
--

LOCK TABLES `recruiter` WRITE;
/*!40000 ALTER TABLE `recruiter` DISABLE KEYS */;
INSERT INTO `recruiter` VALUES (1,'Azouri',600000000,'zouri@lcl.com',1),(2,'Malonga',601010101,'malongo@canal.com',2),(3,'Moula',606060606,'moula@conforama.com',3);
/*!40000 ALTER TABLE `recruiter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(250) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `birth_date` timestamp NULL DEFAULT NULL,
  `resume` varchar(10000) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `image` varchar(10000) DEFAULT NULL,
  `type` varchar(45) DEFAULT 'user',
  `test` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'tracy','zumbu','2002-08-13 22:00:00','','','tracyzumbu@lilo.org',NULL,'user',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_has_offers`
--

DROP TABLE IF EXISTS `users_has_offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_has_offers` (
  `offer_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  KEY `fk_users_has_offers_1_idx` (`offer_id`),
  KEY `fk_users_has_offers_2_idx` (`users_id`),
  CONSTRAINT `fk_users_has_offers_1` FOREIGN KEY (`offer_id`) REFERENCES `offers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_users_has_offers_2` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_has_offers`
--

LOCK TABLES `users_has_offers` WRITE;
/*!40000 ALTER TABLE `users_has_offers` DISABLE KEYS */;
INSERT INTO `users_has_offers` VALUES (1,1);
/*!40000 ALTER TABLE `users_has_offers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-07 10:37:00
