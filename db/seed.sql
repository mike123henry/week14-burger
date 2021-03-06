-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.13-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.3.0.5104
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- -- Dumping database structure for burgers_db
-- CREATE DATABASE IF NOT EXISTS `burgers_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
-- USE `burgers_db`;

-- -- Dumping structure for table burgers_db.burgers
-- CREATE TABLE IF NOT EXISTS `burgers` (
--   `ID` int(11) NOT NULL AUTO_INCREMENT,
--   `BurgerName` varchar(50) NOT NULL,
--   `Devoured` tinyint(4) NOT NULL,
--   `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY (`ID`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table burgers_db.burgers: ~0 rows (approximately)
/*!40000 ALTER TABLE `burgers` DISABLE KEYS */;
REPLACE INTO `burgers` (`id`, `burgerName`, `devoured`, `date`) VALUES
	(1, 'Cheese Burger', 0, '2016-07-27 20:28:58'),
	(2, 'Plain Burger', 0, '2016-07-27 20:29:17');
/*!40000 ALTER TABLE `burgers` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
