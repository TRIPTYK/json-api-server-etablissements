CREATE TABLE SSC_CODES_POSTAUX
(
  ID_CODE_POSTAUX            INTEGER CONSTRAINT SSC_CODES_POSTAUX_ID_CP NOT NULL,
  CODE_POSTAL                INTEGER CONSTRAINT SSC_CODES_POSTAUX_CP NOT NULL,
  COMMUNE_FUSIONNEE          VARCHAR2(50 BYTE),
  COMMUNE_ABSORBEE           VARCHAR2(50 BYTE),
  LANGUE_DE_LA_COMMUNE       VARCHAR2(2 BYTE),
  CODE_NISS                  INTEGER CONSTRAINT SSC_CODES_POSTAUX_CODE_NISS NOT NULL,
  DATE_LAST_MODIF            DATE,
  ID_UTILISATEUR_LAST_MODIF  INTEGER
)