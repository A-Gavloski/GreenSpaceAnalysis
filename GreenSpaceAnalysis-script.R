
#loading packages
install.packages(c("raster", "rgdal", "caret", "randomForest"))
library(raster)
library(rgdal)
library(caret)
library(randomForest)

#loading data
####Greater Toronto Area####
rst_GTA <- c(
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B1.TIF",
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B2.TIF",
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B3.TIF",
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B4.TIF",
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B5.TIF",
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B6.TIF",
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B7.TIF",
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B8.TIF",
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B9.TIF",
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B10.TIF",
  "raw_data/LC09_L1TP_018030_20220817_20230402_02_T1(toronto)/LC09_L1TP_018030_20220817_20230402_02_T1_B11.TIF")

#ottawa
rst_ottawa <- raster()
#kingston
rst <- raster()


####Ottawa####
####Kingston####
#####stacking##### 
#Greater Toronto Area
rst_GTA_stack <- stack(rst_GTA)
#ottawa
rst_ottawa <- raster()
#kingston
rst <- raster()


#top universities in Ontario according to uniRank:
unis <- c("University of Toronto",
          "University of Waterloo",
          "York University",
          "Western University",
          "McMaster University",
          "Queen's University",
          "Ryerson University",
          "University of Ottawa",
          "Carleton University",
          "University of Guelph")




