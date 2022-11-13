/*
 Navicat Premium Data Transfer

 Source Server         : me
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : testweb

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 13/11/2022 14:18:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for web
-- ----------------------------
DROP TABLE IF EXISTS `web`;
CREATE TABLE `web`  (
  `user` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `id` int(0) NULL DEFAULT NULL,
  `WebSite` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of web
-- ----------------------------
INSERT INTO `web` VALUES ('shisirun', 1, 'https://www.baidu.com/');
INSERT INTO `web` VALUES ('shisirun', 2, 'https://www.douyu.com/');
INSERT INTO `web` VALUES ('shisirun', 3, 'https://www.huya.com/');

-- ----------------------------
-- Table structure for weblogin
-- ----------------------------
DROP TABLE IF EXISTS `weblogin`;
CREATE TABLE `weblogin`  (
  `user` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `0keyword0` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`0keyword0`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of weblogin
-- ----------------------------
INSERT INTO `weblogin` VALUES ('admin', '123');
INSERT INTO `weblogin` VALUES ('shisirun', '123456');

SET FOREIGN_KEY_CHECKS = 1;
