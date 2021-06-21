<!-- Loop over equipment data here, generation a new "card" for each on -->
equipment_data = [
  // Inactive.
  {
    active: false,
    description: "Convection Oven",
    manufacturer: "Vulcan",
    model_number: "VC4GD-10",
    serial_number: "54-10097410",
    equipment_type: "Convection Oven",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417521014_IMG8722.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417521014_IMG8722_thumbnail.jpg",
      },
    ],
  },
  // Absent description field.
  {
    active: true,
    manufacturer: "Vulcan",
    model_number: "VC4GD-10",
    serial_number: "54-10097381",
    equipment_type: "Convection Oven",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417524670_IMG8724.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417524670_IMG8724_thumbnail.jpg",
      },
    ],
  },
  // Absent manufacturer field.
  {
    active: true,
    description: "Convection Oven",
    model_number: "VC400-11D1",
    serial_number: "54-10617912",
    equipment_type: "Convection Oven",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417539349_IMG8652.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417539349_IMG8652_thumbnail.jpg",
      },
    ],
  },
  // No photos.
  {
    active: true,
    description: "Convection Oven",
    manufacturer: "Vulcan",
    model_number: "VC4GD-10",
    serial_number: "54-10140583",
    equipment_type: "Convection Oven",
  },
  // Mismatched data type for equipment_photos field.
  {
    active: true,
    description: "Convection Oven",
    manufacturer: "Vulcan",
    model_number: "VC4GD-10",
    serial_number: "54-10505374",
    equipment_type: "Convection Oven",
    equipment_photos: 1337,
  },
  {
    active: true,
    description: "6-Burner Range with Conventional Oven",
    manufacturer: "Vulcan",
    model_number: "36S-Y1A",
    serial_number: "6500747695",
    equipment_type: "Gas Range",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417572623_IMG20190108135420.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417572623_IMG20190108135420_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "4-Burner Range with Conventional Oven",
    manufacturer: "Vulcan",
    model_number: "24S-Y1L",
    serial_number: "6500766936",
    equipment_type: "Gas Range",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417572050_IMG20190108135405.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417572050_IMG20190108135405_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Double-Deck Convection Oven",
    manufacturer: "Vulcan",
    model_number: "VC4GD",
    serial_number: "54-1053637",
    equipment_type: "Convection Oven",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417567753_IMG20190108135447.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417567753_IMG20190108135447_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Double-Deck Convection Oven",
    manufacturer: "Vulcan",
    model_number: "VC4-GD-10",
    serial_number: "54-10181478",
    equipment_type: "Convection Oven",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417569735_IMG20190108135214.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417569735_IMG20190108135214_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "6-Burner Range with Oven",
    manufacturer: "Vulcan",
    model_number: "36S-Y1A",
    serial_number: "6500710269",
    equipment_type: "Gas Range",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417583603_IMG8163.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1564417583603_IMG8163_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Two Drawer Cooler",
    manufacturer: "True Manufacturing",
    model_number: "TRCB-72",
    serial_number: "50803100",
    equipment_type: "Undercounter Refrigerator",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159815790_GrillCoolerandFlattopControlDetail1.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159815790_GrillCoolerandFlattopControlDetail1_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Refrigerator",
    manufacturer: "True Manufacturing",
    model_number: "T-49F",
    serial_number: "1-36602081",
    equipment_type: "Reach-In Refrigerator",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159468519_IMG3793.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159468519_IMG3793_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Prep Table",
    manufacturer: "True Manufacturing",
    model_number: "TSSU-27-12M-B",
    serial_number: "1-36335662",
    equipment_type: "Prep Table",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159468947_IMG3836.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159468947_IMG3836_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Refrigerator",
    manufacturer: "True Manufacturing",
    model_number: "T-49",
    serial_number: "1-36037863",
    equipment_type: "Reach-In Refrigerator",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159468151_IMG3805.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159468151_IMG3805_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Refrigerator",
    manufacturer: "True Manufacturing",
    model_number: "TWT-27",
    serial_number: "1-36646094",
    equipment_type: "Undercounter Refrigerator",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159469353_IMG3853.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159469353_IMG3853_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Refrigerator",
    manufacturer: "True Manufacturing",
    model_number: "TSID-48-2",
    serial_number: "1-35864055",
    equipment_type: "Refrigeration - Other",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159468988_IMG3860.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159468988_IMG3860_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Prep Table",
    manufacturer: "True Manufacturing",
    model_number: "TSSU-48-12",
    serial_number: "52479796",
    equipment_type: "Prep Table",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159469760_IMG3838.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1561159469760_IMG3838_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Refrigerated Prep Table",
    manufacturer: "True Manufacturing",
    model_number: "TSSU-60-16-HC",
    serial_number: "91577047",
    equipment_type: "Hot & Cold Food Well",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1562932699713_IMG5762.jpeg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1562932699713_IMG5762_thumbnail.jpeg",
      },
    ],
  },
  {
    active: true,
    description: "Refrigerator",
    manufacturer: "True Manufacturing",
    model_number: "TSSU-27-08",
    serial_number: "74863498",
    equipment_type: "Undercounter Refrigerator",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1563490141246_IMG5533.jpg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1563490141246_IMG5533_thumbnail.jpg",
      },
    ],
  },
  {
    active: true,
    description: "Refrigerator",
    manufacturer: "True Manufacturing",
    model_number: "TUC-27F-LP-HC",
    serial_number: "87489579",
    equipment_type: "Undercounter Refrigerator",
    equipment_photos: [
      {
        full_size_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1563490279117_IMG5902.jpeg",
        thumbnail_url:
          "https://s3.us-east-2.amazonaws.com/eighty-assets/1563490279117_IMG5902_thumbnail.jpeg",
      },
    ],
  },
];


<template>
  <div class="hello">
    <h2>Welcome to Vue frontend exercise!</h2>
    <ul>
      <a target="_blank" href="https://www.86repairs.com/"
        >Here's a link to our official company site</a
      >
    </ul>
    <ul>
      <a target="_blank" href="https://www.youtube.com/watch?v=OimrN6dn7HA"
        >Here's a video of our CEO being his charismatic self</a
      >
    </ul>
    <ul>
      <a
        target="_blank"
        href="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        >Here's a cute picture of a cat</a
      >
    </ul>
    <ul>
      <a
        target="blank"
        href="https://www.google.com/search?q=how+to+google+things+better"
      >
        Here are some tips about how to be a better developer</a
      >
    </ul>
    <!-- Template of a card I will use to display data. -->
    <!-- How to generate these iteratively via a loop. -->

    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>

  

</template>

<script>
export default {
  name: "Equipment",
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 60px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
