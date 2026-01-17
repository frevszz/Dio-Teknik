import TextAnimate from "./components/TextAnimate";
import ReviewSection from "./components/ReviewSection";

function App() {
  return (
    <>
      <div>
        <div
          className="min-h-screen bg-black relative bg-cover bg-center"
          style={{ backgroundImage: "url(./assets/img/banner.webp)" }}
          loading="lazy"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="max-w-7xl flex flex-col justify-center items-center mx-auto relative z-10 px-4">
            <div className="mt-40 md:mt-40 lg:mt-64 w-full">
              <TextAnimate
                animation="blurInUp"
                by="word"
                delay={0.1}
                duration={1.8}
                className="text-4xl text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold drop-shadow-lg"
                wrapperClassName="flex flex-wrap justify-start md:justify-center gap-2 lg:gap-4 text-left md:text-center"
                style={{ textShadow: "0 0 30px rgba(255,255,255,0.6)" }}
              >
                Solusi Tepat, Pelayanan Hebat
              </TextAnimate>

              <TextAnimate
                animation="blurInUp"
                by="word"
                delay={1.6}
                duration={0.8}
                className="text-white max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl font-regular mt-4 md:mt-5 mx-auto"
                wrapperClassName="flex flex-wrap justify-start md:justify-center gap-2 text-left md:text-center"
              >
                Menyediakan berbagai layanan pengadaan, penjualan, instalasi
                service serta maintenance peralatan elektronik dengan keahlian
                yang telah dimiliki oleh teknisi kami melalui training pelatihan
                yang baik
              </TextAnimate>

              <div className="flex mt-6 items-center justify-start md:justify-center gap-2 sm:gap-4">
                <div className="animate__animated animate__fadeInUp animate__delay-3s">
                  <a
                    href="https://wa.me/6281327718183"
                    className="bg-[#2467E3] font-regular text-sm sm:text-base md:text-lg lg:text-xl py-3 sm:py-3 px-4 sm:px-6 text-white rounded-md transition-all 
                  duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-md flex items-center justify-center gap-2"
                  >
                    Booking Sekarang <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <div className="animate__animated animate__fadeInUp animate__delay-3s">
                  <a
                    href="#Service"
                    className="bg-white font-regular text-sm sm:text-base md:text-lg lg:text-xl py-3 sm:py-3 px-4 sm:px-6 text-black rounded-md transition-all 
                  duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-md flex items-center justify-center gap-2"
                  >
                    Lihat Layanan <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="About"
          className="scroll-mt-28 max-w-7xl mx-auto px-10 mt-10 mb-20"
        >
          <h1 className="font-semibold text-center text-3xl sm:text-5xl">
            Tentang Kami
          </h1>
          <div className="items-center justify-between mt-5 sm:mt-8">
            <div className="px-10 py-7 bg-[#EAEAEA] rounded-md shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 lg:gap-20">
                <div className="flex flex-col gap-4">
                  <p className="font-light text-lg text-center lg:text-left sm:text-xl lg:text-2xl">
                    <span className="text-[#2467E3] font-semibold">
                      CV Dio Teknik
                    </span>{" "}
                    berdiri sejak tahun 2016 dan bergerak di bidang perbaikan,
                    perawatan, serta pengadaan unit AC.
                  </p>
                  <p className="font-light text-lg text-center lg:text-left sm:text-xl lg:text-2xl">
                    Kami telah bekerja sama dengan berbagai perusahaan dan
                    instansi di wilayah Cilacap, didukung oleh armada yang
                    memadai untuk memastikan setiap pekerjaan selesai tepat
                    waktu.
                  </p>
                  <div className=" flex flex-row gap-2 mt-auto justify-center lg:justify-start">
                    <a
                      href="https://www.instagram.com/dioteknik_cilacap?igsh=MTM4czhsNnY1aTBjbQ=="
                      className="text-[#2467E3] hover:text-black font-semibold text-5xl"
                    >
                      <i class="ri-instagram-line"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/share/1CGFwGhmAm/"
                      className="text-[#2467E3] hover:text-black font-semibold text-5xl"
                    >
                      <i class="ri-facebook-line"></i>
                    </a>
                    <a
                      href="https://www.tiktok.com/@dioteknikcilacap?_r=1&_t=ZS-937a3JakRAD"
                      className="text-[#2467E3] hover:text-black text-5xl"
                    >
                      <i class="ri-tiktok-fill"></i>
                    </a>
                  </div>
                </div>

                <div className="w-0.5 h-auto bg-black opacity-40"></div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.698465718327!2d109.01486507594703!3d-7.715467592302439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656d3070a1c91b%3A0xb67ef691aaf0e1f8!2sSERVIS%20AC%20DIO%20TEKNIK%20CILACAP!5e0!3m2!1sid!2sid!4v1768315261880!5m2!1sid!2sid"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md shadow-lg w-full h-64 sm:h-72 md:h-80 lg:h-96"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div id="Service" className="service scroll-mt-28 w-full bg-[#EAEAEA]">
          <div className="max-w-7xl mx-auto px-10 py-15 mt-10">
            <h1 className="font-semibold text-center text-3xl sm:text-5xl">
              Layanan Kami
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-10">
              <div
                className="py-5 px-15 bg-white rounded-md shadow-md text-center transition-all 
                  duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-[80px] text-[#2467E3]">
                  <i class="ri-service-line"></i>
                </div>
                <h2 className="font-medium text-xl mt-3 mb-10">
                  Spesialis perbaikan AC, Kulkas, Freezer, Chiller Showcase dan
                  Mesin Cuci Maintenance Support perawatan AC secara berkala
                  baik Onsite (Sesuai kontrak) atau onCall (Sesuai permintaan).
                </h2>
              </div>

              <div
                className="py-5 px-15 bg-white rounded-md shadow-md text-center transition-all 
                  duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-[80px] text-[#2467E3]">
                  <i class="ri-shake-hands-line"></i>
                </div>
                <h2 className="font-medium text-xl mt-3 mb-10">
                  Pengadaan dan penjualan AC baru dan bekas,sparepart AC
                  Perbaikan, service, jual beli, pembuatan alat pendingin
                  seperti Freezer box, Chiller, Kulkas, Aircooler, Showcase
                  serta mesin cuci dan Waterheater.h
                </h2>
              </div>

              <div
                className="py-5 px-15 bg-white rounded-md shadow-md text-center transition-all 
                  duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-[80px] text-[#2467E3]">
                  <i class="ri-chat-smile-ai-line"></i>
                </div>
                <h2 className="font-medium text-xl mt-3 mb-10">
                  Layanan Customer Service yang cepat serta tanggap dalam
                  menganalisis permasalahan yang di alami oleh pelanggan.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="benefit max-w-7xl mx-auto px-10 mt-10 mb-20">
          <h1 className="font-semibold text-center text-3xl sm:text-5xl">
            Benefit
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-center mt-5">
            Setiap melakukan perawatan AC akan mendapatkan{" "}
            <span className="text-[#2467E3] font-semibold">
              kartu perawatan
            </span>{" "}
            untuk tiap unit AC, Laporan pengerjaan dan serah terima berita acara
            untuk tiap pengerjaan rutin total. Pelayanan maksimal 2x24 Jam serta{" "}
            <span className="text-[#2467E3] font-semibold">
              garansi pengerjaan cepat dan akurat.
            </span>
          </p>
        </div>

        <div className="w-full bg-[#EAEAEA]">
          <div className="max-w-7xl mx-auto px-10 py-15 mt-10">
            <h1 className="font-semibold text-center text-3xl sm:text-5xl">
              Review Pelanggan
            </h1>
            <ReviewSection />
          </div>
        </div>

        <div id="Message" className="w-full">
          <div className="max-w-7xl mx-auto px-10 py-15 mt-8 mb-10 flex flex-col items-center">
            <h1 className="font-semibold text-center text-3xl lg:text-5xl">
              Slot Terbatas, <br />
              <span className="text-[#2467E3]">
                Amankan Jadwal Anda Sekarang!
              </span>
            </h1>

            <a
              href="https://wa.me/6281327718183"
              className="bg-[#2467E3] mt-8 font-medium text-md sm:text-base md:text-lg lg:text-xl py-4 sm:py-5 px-6 sm:px-10 text-white rounded-[50px]
              transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 shadow-[0_0_20px_0px_#2467E3] 
            hover:shadow-[0_0_30px_2px_#2467E3] "
            >
              Booking Sekarang <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
