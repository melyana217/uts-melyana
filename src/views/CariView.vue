<template>
    <section class="search">
        <input
            type="number"
            v-model="inputnomor"
            class="input"
            placeholder="Cari surah ke :"
        />
        <button @click="lihat" class="btn">Check</button>
    </section>

    <section class="surah">
        <div class="judull">
            <h1 v-if="namaSurah" class="judul">{{ namaSurah.name_simple }}</h1>
        </div>

        <div class="suara">
            <p v-if="audio">
                <audio controls class="suaraa">
                    <source :src="audio.audio_url" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </p>
        </div>
        <div class="bis">
            <p class="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
        </div>

    </section>

    <section class="hasil">
        <div class="hasill">
            <ul class="lista">
                <li class="ayat" v-for="ayat in ayah" :key="ayat.id">
                    {{ ayat.text_uthmani }} {{ ayat.text }}
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    import axios from "axios";

    export default {
        data() {
            return {
                ayah: [],
                audio: null,
                namaSurah: null,
                inputnomor: "",
            };
        },

        methods: {
            async lihat() {
                let nomor = this.inputnomor;
                let ayat = `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${nomor}`;
                let arti =
                    "https://api.quran.com/api/v4/quran/translations/134?chapter_number=" +
                    nomor;

                let judul = "https://api.quran.com/api/v4/chapters?language=en";
                let suara =
                    "https://api.quran.com/api/v4/chapter_recitations/2?language=en";

                if (nomor <= 0 || nomor > 114) {
                    alert("Surah di dalam Al-Quran sampai 114, pastikan kembali nomor yang dimasukkan");
                } else {
                    const reqAyat = axios.get(ayat);
                    const reqArti = axios.get(arti);
                    const reqJudul = axios.get(judul);
                    const reqSuara = axios.get(suara);

                    axios.all([reqAyat, reqArti, reqJudul, reqSuara]).then(
                        axios.spread((...response) => {
                            const responseAyat = response[0];
                            const responseArti = response[1];
                            const responseJudul = response[2];
                            const responseSuara = response[3];

                            const a = responseAyat.data.verses;
                            const b = responseArti.data.translations;

                            const gabung = (a, b) => {
                                const res = [];

                                for (let i = 0; i < a.length + b.length; i++) {
                                    if (i % 2 === 0) {
                                        res.push(a[i / 2]);
                                    } else {
                                        res.push(b[(i - 1) / 2]);
                                    }
                                }
                                return res;
                            };

                            this.ayah = gabung(a, b);
                            this.audio =
                                responseSuara.data.audio_files[nomor - 1];
                            this.namaSurah =
                                responseJudul.data.chapters[nomor - 1];
                        })
                    );
                }
            },
        },
    };
</script>
<style>
    .search {
        display: flex;
        margin: 50px 100px;
        flex-direction: row;
        justify-content: center;
    }

    .input {
        height: 40px;
        border: 1px solid #323232;
        color: rgb(0, 0, 0);
        font-size: 16px;
    }

    .input:hover {
        border: 1px solid #6d9581;
    }

    .btn {
        background-color: rgb(73, 142, 126);
        border: 1px solid #323232;
        height: 40px;
        font-size: 20px;
        color: black;

    }

    .btn:hover {
        color: rgb(36, 91, 124);
    }

    .suaraa {
        width: 70%;
        height: 50px;
    }

    .suara {
        text-align: center;
    }

    .judul {
        text-align: center;
        font-size: 70px;
        color: #705725;
    }
    .bismillah {
        padding-top: 80px;
        text-align: center;
        font-size: 50px;
        color: #000000;
    }


    .ayat {
        color: #000000;
        list-style: none;
        margin: 0 200px 50px 200px;
    }

    .ayat:nth-child(odd) {
        text-align: right;
        font-size: 40px;
    }
    .ayat:nth-child(even) {
        text-align: left;
        font-size: 20px;
        color: #000000;
    }

    @media screen and (max-width: 400px) {
        .ayat:nth-child(odd) {
            font-size: 20px;
            margin-bottom: 20px;
            margin-right: 10px;
        }
        .ayat:nth-child(even) {
            font-size: 10px;
            margin: 20px;
        }
        .ayat {
            margin: 0;
        }
    }
</style>