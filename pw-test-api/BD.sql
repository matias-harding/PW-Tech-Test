CREATE SCHEMA `pw_test_matias_harding`;


CREATE TABLE `pw_test_matias_harding`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `branch` VARCHAR(100) NULL,
  `description` VARCHAR(250) NULL,
  `price` INT UNSIGNED NOT NULL DEFAULT 99999999,
  PRIMARY KEY (`id`));


INSERT INTO `pw_test_matias_harding`.`product` (`branch`, `description`, `price`) VALUES ('Unilever', 'OMO', '9000'),
 ('Village', 'Oso de Peluche', '9889'),
 ('Phillips', 'Luz azul', '10000'),
 ('Aroma', 'Velas', '1000'),
 ('Nestle', 'Chocapic', '5600');
