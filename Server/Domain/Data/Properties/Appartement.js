class Appartement{
    num;
    size;
    balcony;
    garage_idx;
    garage_size;
    parkings_num;
    parking1;
    parking2;
    price;
    comments;
    directions_num;
}

class Building{
    num;
    appartements;
}

class Block{
    name;
    num;
    buildings;
    price_propertie;
}

class Block_Price_properties{
    numinal_price;
    vat;
    base_measure;
    current_measure;
    surface_dev;
    parking_dev;
    balcony_dev;
    garage_dev;
}