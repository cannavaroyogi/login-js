# login-js
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  code_product VARCHAR(255) UNIQUE,
  name_product VARCHAR(255),
  price INTEGER,
  is_ready BOOLEAN DEFAULT true,
  image VARCHAR(255),
  sinopsis VARCHAR(500) default null
);

CREATE TABLE best_products (
  id SERIAL PRIMARY KEY,
  code_product VARCHAR(255) UNIQUE,
  name_product VARCHAR(255),
  price INTEGER,
  is_ready BOOLEAN DEFAULT true,
  image VARCHAR(255),
  sinopsis VARCHAR(500) default null
);

-- BEST PRODUCTS
INSERT INTO best_products (code_product, name_product, price, is_ready, image)
VALUES ('P001', 'Black Clover', 10, true, 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpe');

INSERT INTO best_products (code_product, name_product, price, is_ready, image)
VALUES ('P002', 'One Piece', 15, true, 'https://mangaplus.shueisha.co.jp/drm/title/100140/title_thumbnail_portrait_list/176848.jpg?key=acc097658b46d1b9aad6c7afdb077341&duration=86400');

INSERT INTO best_products (code_product, name_product, price, is_ready, image)
VALUES ('P003', 'Haikyuu !!', 20, true, 'https://i.pinimg.com/originals/3b/c9/be/3bc9be2df3d14e9e8400ce277aa1b936.jpg');

-- PRODUCTS
INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P001', 'Black Clover', 10, true, 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpe');

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P002', 'One Piece', 15, true, 'https://mangaplus.shueisha.co.jp/drm/title/100140/title_thumbnail_portrait_list/176848.jpg?key=acc097658b46d1b9aad6c7afdb077341&duration=86400');

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P003', 'Haikyuu !!', 20, true, 'https://i.pinimg.com/originals/3b/c9/be/3bc9be2df3d14e9e8400ce277aa1b936.jpg');

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P004', 'Boku No Hero Academia', 10, true, 'https://static.republika.co.id/uploads/images/inpicture_slide/my-hero_220422093544-815.jpg');

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P005', 'One Punch Man', 15, true, 'https://static.wikia.nocookie.net/onepunchman/images/d/d9/OPM_Key_visual.png/revision/latest?cb=20230327234802&path-prefix=es');

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P006', 'Spy X Family', 20, true, 'https://galleryamh2home.files.wordpress.com/2020/02/fdcuaxsagaarkca.jpeg');

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P007', 'Hunter X Hunter', 10, true, 'https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg');

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P008', 'Blue Lock', 15, true, 'https://cdn.gramedia.com/uploads/items/EMK_RC000041120_Cov_Web_Blue_Lock_06.jpg');

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P009', 'Dragon Ball Z', 20, true, 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/35e4ac6339f5fdcc164160a5755790cd.jpe');
