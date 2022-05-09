<template>
  <div class="container">
    <div style="text-align:center">
      <p>CONTACT US</p>
    </div>
    <div class="row">
      <div class="column">
        <form action="/action_page.php">
          <label for="fname">Nama Depan</label>
          <input type="text" id="fname" name="firstname">
          <label for="lname">Nama Belakang</label>
          <input type="text" id="lname" name="lastname">
          <label for="country">Kota</label>
          <select id="country" name="country">
            <option value="australia">Pekanbaru</option>
            <option value="canada">Jakarta</option>
            <option value="usa">Surabaya</option>
          </select>
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Tulis sesuatu.." style="height:170px"></textarea>
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>

  <div class="w3-third">
    <a class="social-media-icon" href="https://www.instagram.com/mella.arfnn/"><span class="fab fa-instagram"> Instagram</span></a>
    <a class="social-media-icon" href="https://link_social_mendia_anda"><span class="fab fa-whatsapp"> whatsapp</span></a>
    <a class="social-media-icon" href="https://link_social_mendia_anda"><span class="fab fa-facebook"> Facebook</span></a>
    <a class="social-media-icon" href="https://www.youtube.com/channel/UCPaqH3PLNfkphsuHT7WLbCw"><span class="fab fa-youtube"> Youtube</span></a>
  </div>

  <h6>Mella Arfina</h6>
</template>

<style>
  * {
  box-sizing: border-box;
}

/* Style inputs */
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

/* Style the container/contact section */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
}

/* Create two columns that float next to eachother */
.column {
  float: left;
  width: 50%;
  margin-top: 6px;
  padding: 20px;
}

.row {
  margin-left: 490px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.w3-third {
  align-content: center;
  width: 50%;
  height: 50%;
  margin-left: 600px;
}

h6 {
  margin-left: 39%;
  font-size: 18px;
  color: black;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
  .column, input[type=submit] {
    width: 100%;
    margin-top: 0;
    margin-left: 0%;
  }
  }
</style>
