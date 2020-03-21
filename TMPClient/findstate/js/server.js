import React from "react";
import { useGetData } from "use-axios-react";


const server_url = "https:localhost/8080";

let apart_details = {
  block: undefined,
  building: undefined,
  apartment: undefined
}

export const set_details = (block, building, apartment) => {
  apart_details['block'] = block;
  apart_details['building'] = building;
  apart_details['apartment'] = apartment;
}

export const get_details = () => {return apart_details;}

export const get_apartment = (block, building, apartment) => {
    console.log(block);
    const [data, loading] = useGetData(server_url + "/apartment/" +
     (block? block.toString() + "/" +
      (building? building.toString() + "/"
       (apartment? apartment.toString() + "/" : "") : "") : ""));
   
    if (loading) return <div>Loading...</div>;
   
    return <blockquote>{data.quote}</blockquote>;
  };

export const get_purchase = (block, building, apartment) => {
    const [data, loading] = useGetData(server_url + "/apartment/" +
     (block? block.toString() + "/" +
      (building? building.toString() + "/"
       (apartment? apartment.toString() + "/" : "") : "") : ""));
   
    if (loading) return <div>Loading...</div>;
   
    return <blockquote>{data.quote}</blockquote>;
  };

  function purchaseToRequest({ block, building, apartment, buyer1_name, buyer1_id, buyer2_name, buyer2_id, parking1, parking2, garage, buying_date, buying_price, assassment_no, mortage_no, mortage_bank, notes }) {
    return {
      url: server_url + "/" + purchase + "/" + block + "/" + building +"/" + apartment + "/",
      data: { block, building, apartment, buyer1_name, buyer1_id, buyer2_name, buyer2_id, parking1, parking2, garage, buying_date, buying_price, assassment_no, mortage_no, mortage_bank, notes }
    };
  }
/*
const add_purchase = (json) => {
    const [create, sending, { error, data }] = usePostCallback(purchaseToRequest);
    block = json['block'];
    building = json['building'];
    apartment = json['apartment'];
    buyer1_name, buyer1_id, buyer2_name, buyer2_id, parking1, parking2, garage, buying_date, buying_price, assassment_no, mortage_no, mortage_bank, notes
    handleclick = (ap) => {create({ap})};
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">דירה</InputGroup.Text>
                </InputGroup.Append>
                <FormControl
                placeholder="דירה"
                aria-label="דירה"
                aria-describedby="basic-addon2"
                />
                <Button type="submit" variant="primary" onclick={handleclick(placeholder)}>אישור</Button>
            </InputGroup>
            
        </div>
    );
  };
  */