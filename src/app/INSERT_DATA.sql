-- Datos para el INVENTARIO/ ///////////////////////////////////////////////////////
INSERT INTO "ADMIN_DB"."INVENTARIO" 
(ID_INVENTARIO, DESCRIPCION, ID_PRODUCTO, CANTIDAD, ID_DIRECCION, ID_PROVEEDOR)
VALUES
(133198, 'EUROPA OCCIDENTAL', 139504, 43, 151687, 163266);

INSERT INTO "ADMIN_DB"."INVENTARIO" 
(ID_INVENTARIO, DESCRIPCION, ID_PRODUCTO, CANTIDAD, ID_DIRECCION, ID_PROVEEDOR)
VALUES
(133194, 'EUROPA OCCIDENTAL', 168615, 25, 151687, 169363);

INSERT INTO "ADMIN_DB"."INVENTARIO" 
(ID_INVENTARIO, DESCRIPCION, ID_PRODUCTO, CANTIDAD, ID_DIRECCION, ID_PROVEEDOR)
VALUES
(186692, 'NORTEAMERICA', 187877, 31, 200747, 189668);

--Datos para el PROVEEDOR ////////////////////////////////////////////////////////
INSERT INTO "ADMIN_DB"."PROVEEDOR" 
(ID_PROVEEDOR, DESCRIPCION, ID_TIPO_PROV, ID_METODOTRANSPORTE, ID_DIRECCION)
VALUES
(163266, 'AOC', 222285, 225311, 246070);

INSERT INTO "ADMIN_DB"."PROVEEDOR" 
(ID_PROVEEDOR, DESCRIPCION, ID_TIPO_PROV, ID_METODOTRANSPORTE, ID_DIRECCION)
VALUES
(169363, 'LENOVO', 252210, 225311, 268815);

INSERT INTO "ADMIN_DB"."PROVEEDOR" 
(ID_PROVEEDOR, DESCRIPCION, ID_TIPO_PROV, ID_METODOTRANSPORTE, ID_DIRECCION)
VALUES
(189668, 'HP', 271623, 225311, 287664);

-- Datos para la tabla PRODUCTO /////////////////////////////////////////////
INSERT INTO "ADMIN_DB"."PRODUCTO" 
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(145598, 'MOTHERBOARD_ASUSZ490', 150144, 218,90);

INSERT INTO "ADMIN_DB"."PRODUCTO" 
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(159201, 'MEMORIA_RAM-DDR4-4GB', 182963, 24,90);

INSERT INTO "ADMIN_DB"."PRODUCTO" 
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(183557, 'TECLADO_RAZER-BLACKW', 209001, 213,90);

INSERT INTO "ADMIN_DB"."PRODUCTO" 
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(198953, 'BOCINAS_ANLIXSP206', 209001, 5,30);

INSERT INTO "ADMIN_DB"."PRODUCTO"
(ID_PRODUCTO, DESCRIPCION, )
VALUES
(127546, 'WEBCAM IMI W88H', 127456, 39.90,);

INSERT INTO "ADMIN_DB"."PRODUCTO"
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(125467, 'BATTERY BACKUP TRIPP', 127456, 132.00);

INSERT INTO "ADMIN_DB"."PRODUCTO"
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(132456, 'MousePad RAZER', 127456, 22.90);

INSERT INTO "ADMIN_DB"."PRODUCTO"
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(156785, 'GIGABYTE AORUS P850W', 135412, 189.90);

INSERT INTO "ADMIN_DB"."PRODUCTO"
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(153576, 'GIGABYTE AORUS P750W', 135412, 155.00);

INSERT INTO "ADMIN_DB"."PRODUCTO"
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(151234, 'CORSAIR AX1200I', 135412, 399.90);

INSERT INTO "ADMIN_DB"."PRODUCTO"
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(171345, 'INTEL I5 10TH GEN', 179850, 195.00);

INSERT INTO "ADMIN_DB"."PRODUCTO"
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(175467, 'AMD RYZEN 7 3800X', 179850, 407.00)

INSERT INTO "ADMIN_DB"."PRODUCTO"
(ID_PRODUCTO, DESCRIPCION, ID_TIPO_PROD, PRECIO_UNITARIO)
VALUES
(171576, 'INTEL CELERON G4930', 179850, 59.90)

-- Datos para la tabla TIPO_PRODUCTO ///////////////////////////////////////////////////////
INSERT INTO "ADMIN_DB"."TIPO_PRODUCTO" 
(ID_TIPO_PROD, DESCRIPCION)
VALUES
(150144, 'MOTHERBOARD');

INSERT INTO "ADMIN_DB"."TIPO_PRODUCTO" 
(ID_TIPO_PROD, DESCRIPCION)
VALUES
(182963, 'MEMORIAS');

INSERT INTO "ADMIN_DB"."TIPO_PRODUCTO" 
(ID_TIPO_PROD, DESCRIPCION)
VALUES
(209001, 'PERIFERICOS');

INSERT INTO "ADMIN_DB"."TIPO_PRODUCTO" 
(ID_TIPO_PROD, DESCRIPCION)
VALUES
(127456, 'ACCESORIOS');

INSERT INTO "ADMIN_DB"."TIPO_PRODUCTO" 
(ID_TIPO_PROD, DESCRIPCION)
VALUES
(135412, 'FUENTE DE PODER');

INSERT INTO "ADMIN_DB"."TIPO_PRODUCTO" 
(ID_TIPO_PROD, DESCRIPCION)
VALUES
(179850, 'PROCESADORES');

-- Datos para la tabla CLIENTE ///////////////////////////////////////////////////////
INSERT INTO "ADMIN_DB"."CLIENTE" 
(ID_CLIENTE, ID_TIPOCLIENTE, ID_USUARIO)
VALUES
(352561, 375347, 335064);

INSERT INTO "ADMIN_DB"."CLIENTE" 
(ID_CLIENTE, ID_TIPOCLIENTE, ID_USUARIO)
VALUES
(358573, 375347, 337760);

INSERT INTO "ADMIN_DB"."CLIENTE" 
(ID_CLIENTE, ID_TIPOCLIENTE, ID_USUARIO)
VALUES
(368244, 375102, 350960);

-- Datos para la tabla USUARIO ///////////////////////////////////////////////////////
INSERT INTO "ADMIN_DB"."USUARIO" 
(ID_USUARIO, ID_INFO_USER)
VALUES
(335064, 394273);

INSERT INTO "ADMIN_DB"."USUARIO" 
(ID_USUARIO, ID_INFO_USER)
VALUES
(337760, 410999);

INSERT INTO "ADMIN_DB"."USUARIO" 
(ID_USUARIO, ID_INFO_USER)
VALUES
(350960, 421321);

INSERT INTO "ADMIN_DB"."USUARIO" 
(ID_USUARIO, ID_INFO_USER)
VALUES
(350964, 421367);

-- Datos para la tabla INFO_PERSONAL ///////////////////////////////////////////////////////
INSERT INTO "ADMIN_DB"."INFO_PERSONAL" 
(ID_INFO_USER, ID_USUARIO, APELLIDO, NOMBRE, CEDULA, CORREO, NO_TELEFONO, EDAD, PASSWORD)
VALUES
(394273, 335064, 'FLORES', 'MARTA', '000-5902781-01', 'mflores33@hotmail.com',69437856 ,33, 'admindb');

INSERT INTO "ADMIN_DB"."INFO_PERSONAL" 
(ID_INFO_USER, ID_USUARIO, APELLIDO, NOMBRE, CEDULA, CORREO, NO_TELEFONO, EDAD, PASSWORD)
VALUES
(410999, 337760, 'JIMENEZ', 'CARLOS', '650042041', 'cjimenez43@yahoo.com', 69437856,43, 'admindb');

INSERT INTO "ADMIN_DB"."INFO_PERSONAL" 
(ID_INFO_USER, ID_USUARIO, APELLIDO, NOMBRE, CEDULA, CORREO, NO_TELEFONO, EDAD, PASSWORD)
VALUES
(421367, 350964, 'ARAUZ', 'FAUSTINO', '032-1234-312', 'farauz@hotmail.com', 69437856,35, 'admin_dbs');

-- ///////////////////////////////////////////////////////