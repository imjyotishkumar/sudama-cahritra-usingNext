"use client";

import { useState, useRef, useEffect } from "react";

const songs = [
  { title: "Barsho Ke Bichde", src: "/song/Sab Din Hot Na Ek Samaan By Madan Rai [ Bhojpuri Full HD Song] I Sab Din Hot Na Ek Saman.mp3" },
  { title: "Song 2", src: "/song/sab din hot na ek saman.mp3" },
  { title: "Song 3", src: "/song/chala sudama krishna se milan dwarika dham.mp3" },
  { title: "Song 4", src: "/song/lakshmi aisi hamri. dulhniya bin raha jayen na.mp3" },
  { title: "Song 5", src: "/song/narayan namstudham sarvapara.mp3" },
  { title: "Song 6", src: "/song/nahi samjhe bit jayen.mp3" },
  { title: "Song 7", src: "/song/2020 Ki New Jhanki Krishana Sudama    Aa Ke Tu Dekh Le  Kanha    Lokesh Prjapati   Simbhawali.mp3" },
  { title: "Song 8", src: "/song/dwar khado.mp3" },
  { title: "Song 9", src: "/song/ek mitra ka bada nibhane chale hai.mp3" },
  { title: "Song 10", src: "/song/barsho ke bichde.mp3" },
  { title: "Song 10", src: "/song/rani kare abhinandan.mp3" },
  { title: "Song 10", src: "/song/tribhuban ke jhan sampda.mp3" },
  { title: "Song 10", src: "/song/hath me chabal lete hi sab me dar bhao wyap.mp3" },

];

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {

    if (typeof window !== "undefined") {
      audioRef.current = new Audio(songs[0].src);
    }
  }, []);

  const playSong = (index) => {
    if (!audioRef.current) return;

    if (currentSong !== index) {
      audioRef.current.src = songs[index].src;
      setCurrentSong(index);
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="p-10">
      <h2></h2>

      <div className="section">
        <h3>पुरुष पात्र:</h3>
        <ol>
          <li><strong>सुदामा</strong> – एक गरीब ब्राह्मण</li>
          <li><strong>वसुंधरा</strong> – सुदामा की पत्नी</li>
          <li><strong>कृष्ण</strong> – द्वारिकाधीश</li>
          <li><strong>द्वारपाल (मुख्य)</strong></li>
          <li><strong>सहायक द्वारपाल</strong> – 2</li>
          <li><strong>ग्रामीण</strong> – चार</li>
          <li><strong>सैनिक</strong> – चार</li>
          <li><strong>चक्रधर</strong></li>
          <li><strong>आयासी राजा</strong></li>
        </ol>
      </div>


      <div class="section">
        <h3>स्त्री पात्र:</h3>
        <ol>
          <li><strong>वसुंधरा</strong> – सुदामा की पत्नी</li>
          <li><strong>सुशीला</strong> – एक ग्रामीण</li>
          <li><strong>उर्मिला</strong> – दूसरी ग्रामीण</li>
          <li><strong>(कृष्ण की तीनों रानियाँ)</strong></li>
          <li><strong>रुकमिनी</strong></li>
          <li><strong>जामवंती</strong></li>
          <li><strong>सत्यभामा</strong></li>
          <li><strong>तीन – चार ग्रामीण स्त्रियाँ</strong> (जिनसे सुदामा जी भीख मांगते हैं)</li>
        </ol>
      </div>
      <div className="scene">

        <div class="section-1 mt-5">
          <button
            onClick={() => playSong(0)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 0 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 1
          </button>
          <p><strong>सुदामा फटे हुए धोती पहने हुए हैं, हाथ में एक लाठी है, कंधे पे एक फटी हुई गमछी है। वे भीख मांगते
            हैं </strong></p>
          ❁ दृश्य : 1 ❁


          <p>सुदामा, उनकी पत्नी, चारों बच्चे एवं जीर्ण –शीर्ण हालत सी एक झोंपड़ी , जिसमें एक टूटी हुई चारपाई है। उनके चारों
            बच्चे जो आधा पेट खाकर रोते – रोते सो जाते है। सुदामा को वसुंधरा रोती हुई पानी परोसती है और सुदामा उसे चुप –
            चाप पी लेते हैं।</p>
          <p><strong>वसुंधरा (रोती हुई):</strong> नाथ, अब और कितने दिन सिर्फ जल ग्रहण कर आप निर्वाह करेंगे? आपका स्वास्थ
            भी भूख के मारे गिरता जा रहा हैं। क्या आज भी भिक्षा नहीं मिली स्वामी?</p>
          <p><strong>सुदामा (फुट – फुट कर रोते हुए):</strong> बसुंधरे, मैं पिछले तीन दिनों से भीख मांग रहा हूँ, लेकिन भीख
            नहीं मिल रही है। न जाने अब बिधाता की क्या इच्छा है!</p>
          <p><strong>वसुंधरा:</strong> (शिशकिया लेकर रोने लगती है।)</p>

        </div>
        <div className="section-2">
          <div class="scene">
            <h2>
              <center>❁ दृश्य : 2 ❁</center>
            </h2>
            <p>सुदामा और उनकी पत्नी चारों बच्चे एवं जीर्ण–शीर्ण हालत सी एक झोंपड़ी , जिसमें एक टूटी हुई चारपाई है। बच्चे आधी
              पेट खाकर रोते-रोते सो जाते हैं। सुदामा भूख के मारे हाड़ी में भोजन ढूंढते हैं, लेकिन हाड़ी बिल्कुल खाली रहती
              है, सिर्फ चावल का एक दाना उस हाड़ी में सटा रहता है, जिसको सुदामा आधा चावल अपनी पत्नी को और आधा चावल श्री
              कृष्ण को अर्पण करते हैं।</p>
            <p><strong>वसुंधरा:</strong> जिनको आप चावल का आधा दाना अर्पण करने जा रहे हो, भला उनको इसकी क्या कद्र होगी?</p>
            <p><strong>सुदामा:</strong> तुम मुझ पर चाहे जितना क्रोध कर लो लेकिन अपने अंदर श्री कृष्ण के प्रति श्रद्धा का
              दीपक मत बुझने दो। जय श्री कृष्ण...</p>
            <p><strong>वसुंधरा:</strong> अच्छा भक्त राज, आपकी आज्ञा शिरोधार्य करती हूँ। परंतु इतनी बात समझा दीजिए मुझे...
            </p>
            <p><strong>सुदामा:</strong> क्या?</p>
            <p><strong>वसुंधरा:</strong> यही की आपको जो हाड़ी में चावल का एक दाना मिला, उसका आधा दाना आपने मेरे लिए छोड़ दिया
              क्योंकि मैं दो दिनों से भूखी थी। और बाकी आधा चावल का दाना आपने स्वयं क्यों नहीं खाया? अपने उस भगवान को क्यों
              खिलाने चले गए?</p>
            <p><strong>सुदामा:</strong> प्रभु को भेंट करना है तो अपने हाथों से करो, परंतु श्रद्धा और भक्ति के साथ। आओ...</p>
            <p><strong>सुदामा:</strong> हे, सर्वात्मा, हे विश्वात्मा! शास्त्र कहता है कि आपको श्रद्धा से एक पत्ता, एक फूल,
              या एक बूंद जल भी अर्पण किया जाए तो आप उसी से खुश हो जाते हैं। सो हे विश्वात्मा, आज हमसे इतना ही हो सका, आप
              हमसे चावल का आधा कण खुशी से ग्रहण करें।</p>
            <p><strong>लेखक:</strong> सुदामा की गरीबी और वसुंधरा की बेबसी भरी श्री कृष्ण पर कटाक्ष ने श्री कृष्ण के दिल को
              झकझोर दिया। वे (श्री कृष्ण और उनकी पत्नी लक्ष्मी) चावल का आधा दाना पाकर गदगद हो जाते हैं और अपनी पत्नी को
              समय आने पर उसका कीमत चुकाने को बोलते हैं।</p>
          </div>

        </div>
        <div className="section-3">
          <h2>
            <center>❁ दृश्य : 3 ❁</center>
          </h2>
          <p>सुदामा जी अगले दिन भिक्षा मांगने के लिए अपने नगर वृंदापूरी जाते हैं।</p>
          <p><strong>सुदामा (भिक्षा मांगते हुए):</strong></p>
          <p><strong>पहला द्वार:</strong> भवती, भवती... भिक्षाम देही। (वहाँ एक स्त्री भीख देती हैं।)</p>
          <p><strong>दूसरा, तीसरा और चौथा द्वार:</strong> सिर्फ फटकार मिलती है। लेकिन पाँचवां द्वार पर उन्हें खीर मिलती
            है। वह भोली स्त्री सुदामा को खीर देती हैं।</p>
          <p><strong>पाँचवां द्वार की स्त्री:</strong> लो, आज पूनम है इसलिए घर में खीर बनी थी। आज बच्चों को खीर खिलाना।
          </p>
          <p><strong>सुदामा:</strong> श्री कृष्ण... श्री कृष्ण...</p>
          <p><strong>पाँचवीं स्त्री:</strong> आज वहाँ सामने वाले घर में उत्सव है, वहाँ ब्राह्मणों को वस्त्र बाँटा जा रहा
            है। आप वहाँ जाएं, आपको नई धोती मिल जाएगी।</p>
          <p><strong>सुदामा:</strong> नहीं भवती, आज मेरे पाँच घर पूरे हो चुके हैं। ब्राह्मण का छठे घर में जाने का विधान
            नहीं है, देवी।</p>
          <p><strong>पाँचवीं स्त्री:</strong> मैंने तो इसलिए कहा था कि तुम्हारी धोती जगह-जगह फट गई है। वहाँ से तुम्हें नई
            धोती मिल जाती। नहीं जानी तो तुम्हारी इच्छा।</p>
          <p><strong>सुदामा:</strong> श्री कृष्ण... श्री कृष्ण...</p>
          <p><strong>लेखक:</strong> सुदामा जैसे ही पाँचवीं स्त्री के घर से खीर लेकर जाते हैं, रास्ते में काफी लोगों की
            अफरा-तफरी (भाग-दौड़) होती है। सुदामा उसी अफरा-तफरी में भागते हुए लोगों से टकरा जाते हैं, और सारी खीर सड़क पर
            बिखर जाती है। एक कुत्ता खीर को खाने लगता है।</p>
          <p><strong>सुदामा:</strong> श्री कृष्ण... श्री कृष्ण...</p>
          <p>फिर सुदामा भीख मांगने नगर जाते हैं और भीख मांगते हैं।</p>
          <button
            onClick={() => playSong(1)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 1 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 2
          </button>
        </div>

        <div className="section-4">
          <div class="scene">
            <h2>
              <center>❁ दृश्य ❁</center>
            </h2>
            <p>सुदामा, और उनके चारों बच्चे खाना खाने बैठते हैं। बच्चे खा रहे हैं। वसुंधरा जैसे ही सुदामा को खाना परोसती हैं
              और
              जैसे ही निवाला मुंह में लेने ही वाला रहता है की सुदामा को गाय की आवाज दो तीन वार सुनाई पड़ती है ।</p>
            <p><b>सुदामा :</b> अरे , आज मैं धेनु को कैसे भूल गया । मैं धेनु को भोजन देकर आता हूँ (सुदामा अपने हिस्से का आधा
              भोजन धेनु को
              देने जाता है । गाय को खाना देने के बाद ज्योंही सुदामा खाने को बैठता है तभी एक विक्षिप्त एवं जीर्ण – शीर्ण कपड़े
              पहने हुए एक भिखारी पुकारता हैं ।</p>
            <p><b>भिखारी :</b> माता जी , माता जी , बहुत दिनों से भूखा हूँ । आप भोजन देंगे तो भगवान आपका भला करेगा ।
              लेखक : सुदामा उन्हें बचा हुआ अपने हिस्से का आधा भोजन उस भिखारी को दे देते हैं और खुद सिर्फ पानी पी कर रह लेते
              हैं। </p>
            <p><b>सुदामा :</b> श्री कृष्ण --- 3 --- वसुंधरे मेरा तो पेट भर गया अब तुम भी पानी पीकर सो जाओ ।.. श्री कृष्ण
              ...... 5……
              (वसुंधरा वेवस भरी निगाहें से सुदामा को निहारती हैं एवं रोते हुए बोलती है ।)</p>
            <p><b>वसुंधरा :</b> स्वामी आप अगर बुरा ना माने तो एक बात कहूँ ।</p>
            <p><b>सुदामा :</b> हाँ , कहो क्या कहना चाहती हो ?</p>
            <p><b>वसुंधरा :</b> स्वामी आपका मित्र श्री कृष्ण तो द्वारिकाधीश हैं, आप उनके पास क्यों नहीं जाते ? वे हमारी
              लाचारी
              और गरीबी पे तरस जरूर खाएंगे । एक भक्त को अपने भगवान के पास जाने में भला क्या हिचकिचाहट हैं । वे परम दयालु हैं
              ।
              वे सब की
              मदद करते हैं। तो भला आपको उनसे मदद लेने में कैसी शर्म ?</p>
            <p><b>सुदामा :</b> जीवन के अंतिम समय में एक मित्र का एहसान लेकर कनोला क्यों बनाती हो मुझे।</p>
            <p><b>वसुंधरा :</b> जो तीनों लोकों के ठाकुर हैं। जो दीन - हीन के सहारा हैं। वैसे मित्र के सामने एक वार तो क्या,
              अगर हजार बार भी कनोला बनना पड़े तो लाज नहीं करना चाहिए स्वामी ।</p>
            <p><b>सुदामा :</b> वसुंधरे वस, अब और हठ ना करो वस ये समझ लो की जब कोई मनुष्य किसी के सामने हाथ फैला कर कहता है
              की
              कुछ दो, तब उसका मान, सम्मान, प्रेम, गरुआपन, स्नेह इन पांचों का तप्तकाल नाश हो जाता है। इसलिए कहा गया हैं की
              विपत्ति पड़े द्वार मित्र के घर न जाइए .... 5
              <p>(यह कहते हुए .. टूटी हुई पलंग पर लेट जाते हैं ।)</p>
            </p>
            <p><b>वसुंधरा :</b> (श्री कृष्ण की मूर्ति को निहारते हुए)ऐसे हठी ब्राह्मण की आप भी कुछ सहायता नहीं कर सकते ,
              कैसे
              भगवान हो,
              ये मुझसे नहीं मानते है, न, सही आप ही इनको समझा दो , ये तो आप के भक्त भी है और मित्र भी (सिसकियाँ लेती हुए
              .......)
              अगर ये आपके पास नहीं जाते हैं तो क्या आप अपने गरीब , निर्धन मित्र के पास नहीं आ सकते ?</p>
            <p><b>सुदामा :</b> नहीं वसुंधरा, उन्हें यहाँ मत बुलाओ, मैं द्वारिका जाने के लिए तैयार हूँ ।
              (वसुंधरा अपने पड़ोसी सुशीला के पास जाती है )</p>
            <p><b>वसुंधरा :</b> सुशीला बहन, थोड़ी तंदुल उधार मांगने आई हूँ। हो सके तो थोड़ी तंदुल दे दो । ये द्वारिकाधीश से
              मिलने जा रहें
              हैं । राजा के पास खाली हाथ तो नहीं जा सकते न ! इसलिए आना पड़ा ।</p>
            <p><b>सुशीला :</b> बहुत अच्छा किया जो आप यहाँ आयें राजा के पास जा रहें हैं तो दो मुट्ठी क्या सारे ले जाओ ।
              वसुंधरा : नहीं, नहीं बहन इतना की आवश्यकता नहीं। ब्राह्मण का भेंट तो प्रतीक स्वरूप होते हैं । थोड़ी सी चावलों को
              भी
              प्रभु बहुत मान लेंगे ।</p>
            <p><b> सुशीला :</b> ठीक हैं , ये लो बहन ।
              (सुशीला सुप से चावल वसुंधरा को दो अंजनी देते हैं)</p>
            <p><b>वसुंधरा :</b> ये लीजिए , सुशीला से मांगकर थोड़ी सी तंदूल ले आई हूँ । मेरी ओर से प्रभु को यही भेंट कर देना ।
              वो
              अंतर्यामी है मेरी भावना से ही प्रसन्न हो जाएंगे । (वसुंधरा एक गठरी चावल सुदामा को देते हुए)जब आप अपने मित्र से
              मिलें तो सभी हालात उनको बता दीजिएगा । वो अवश्य आपकी सारी दुख हर लेंगे ।</p>
            <p><b>सुदामा :</b> देखो वसुंधरे , मैं वहाँ जा रहा हु केवल तुम्हारे कहने पर मैं स्वयं अपने मुंह से कुछ नहीं
              मांगूँगा ।
              विपत्ति में सारे रिश्ते, नाते, मित्र अपने मुख मोड लेते हैं।</p>
            <p><b>वसुंधरा :</b> आपको मांगने की जरूरत ही नहीं पड़ेगी स्वामी। मांगने से तो इंसान देता है वो तो भगवान हैं ,
              अंतर्यामी हैं वो
              बिना मांगे ही सब कुछ दे देंगे । आप केवल एक बार उनके पास पहुँच तो जाइए स्वामी ।</p>
            <p><b>सुदामा :</b> ठीक है, चला जाऊंगा लेकिन कुछ माँगूँगा नहीं ।</p>
            <p><b>वसुंधरा :</b>(हल्की सी मुस्कुराहट के साथ ) ठीक है (हाथ जोड़कर ) जय श्री कृष्ण ।</p>
            <p><b> सुदामा :</b> जय श्री कृष्ण ।</p>
          </div>

        </div>
        <div className="section-5">
          <h2>
            <center>❁ दृश्य : 4 ❁</center>
          </h2>
          <p>(सुदामा द्वारिका के लिए रवाना होते हैं
            रास्ते में काफी कंकड़, पत्थर, झाड़ी एवं सूर्य की तीखी धूप होती हैं ।)</p>
          <button
            onClick={() => playSong(2)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 2 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 3
          </button>
          <p><strong>सुदामा :</strong> जय श्री कृष्ण ---5</p>
          <p>( कठिन डगर के कारण सुदामा का चलना मुश्किल हो जाता है तभी श्री कृष्ण भेष बदलकर एक राहगीर के रूप में उन्हें मदद
            करने वहाँ आते हैं । श्री कृष्ण मुरली बजाते हुए – अपनी धुन में चलते रहते है । </p>
          <p><strong>सुदामा :</strong> (राहगीर को सोचते हुए )- अरे, रुको भाई --- रुको .. </p>
          <p><strong>लेखक :</strong> ( श्री कृष्ण का दूसरा भेष का नाम “मुरली” है जो सुदामा को ऊपर से नीचे तक निहारते है
            फिर
            सुदामा का पैर छूते हैं।)</p>
          <p><strong>सुदामा :</strong> अरे -रे -रे , नहीं भाई– ये क्या कर रहे हो ?</p>
          <p><strong>मुरली :</strong> विप्रवर आपके भेष भूसा को देखकर लग रहा है की आप ब्राह्मण हैं । तथा आपकी आँखों में
            अहयात्मिक तेज भी है, जिसे देखकर मन ने चाहा की आपका आदर सत्कार करूँ, भला एक सच्चे ब्राह्मण का आदर करने का अवसर
            मैं कैसे छोड़ दूँ । </p>
          <p><strong>सुदामा :</strong> यथास्वीभवः , बड़े संस्कारी लगते हो । </p>
          <p><strong>मुरली :</strong> क्षमा करें दीन बंधु , आप आ कहाँ से रहें हैं ?, और आप जा कहाँ रहें हैं ? आपका शुभ नाम
            क्या है ?</p>
          <p><strong>सुदामा :</strong> मेरा नाम, सुदामा है । </p>
          <p><strong>मुरली :</strong> हाँ , परंतु इतनी धूप में आप इस पीड़ा में भी यात्रा कर रहे है । </p>
          <p><strong>सुदामा :</strong> अरे पीड़ा कैसी , तुम्हारी वंशी की धुन सुनते ही सारी पीड़ा दूर हो गई। किशन – कन्हैया
            की
            याद आ गई । बड़ी मनमोहक धुन क्या बजा लेते हो तुम , बिल्कुल किशन – कन्हैया की भांति , कहाँ से सीखे हो यह धुन ।
          </p>
          <p><strong>मुरली :</strong> यह धुन की श्री कृष्ण की ही धुन है । आपको देखकर ऐसा लगता है की आप भी श्री कृष्ण के
            भक्त
            हैं । </p>
          <p><strong>सुदामा :</strong> जय श्री कृष्ण । </p>
          <p><strong>मुरली :</strong> जय श्री कृष्ण । </p>
          <p>( दोनों चलते-चलते बात करने लगते हैं )</p>
          <p><strong>सुदामा :</strong> श्री कृष्ण मेरे भगवान भी हैं और परममित्र भी । उनके दर्शनों की अभिलाषा से ही
            द्वारिका
            जा रहा हु । तुम भी द्वारिका जा रहे हो ?</p>
          <p><strong>मुरली :</strong> हाँ , हाँ मैं भी द्वारिका में ही रहता हूँ न ! अच्छा हुआ आप मिल गए, अब यात्रा आराम से
            कटेगी । मैं अपनी धर्मपत्नी को मायके छोड़ने गया था । बड़ी मुश्किल से यहाँ तक पहुँचा हूँ । मेरे पग ही आगे नहीं
            उठते
            ।</p>
          <p><strong>सुदामा :</strong> हें– हें.. हें..। (तभी सुदामा के पैर में कांटा चुभ जाता है।) – आ—आ-- आ– (कराहते हुए
            )
            अरे ये कैसी कठिनाई , तुम तो अच्छे भले जवान हो आ—आ—आ—(सुदामा कराहते है और मुरली उन्हें वही एक पत्थर पर बैठाते
            हैं
            ।) -- आ—आ</p>
          <p><strong>मुरली :</strong> हां अरे , कुछ न पूछो ये ससुरी जवानी ही ऐसी है ये खुद ही दस कठिनाइयों को एक कठिनाई
            है।(मुछ पर ताव देते हुए ) और ये अकेलापन हाय .... धर्मपत्नी को मायके छोड़कर जब पग आगे बढ़ाता हूँ , तो मन वावरा
            पीछे
            दौड़ने लगता हैं।</p>
          <p><strong>सुदामा :</strong> (हँसते हुए) .. हें .. हें .. हें ..</p>
          <p><strong>मुरली :</strong> (लंबी सांस खिचते हुए) क्या करूँ.... , लक्ष्मी देवी की याद पीछा नहीं छोड़ती ।</p>
          <p><strong>सुदामा :</strong> लक्ष्मी देवी , यानि तुम्हारी पत्नी ।</p>
          <p><strong>मुरली :</strong> हाँ , हाँ वो , वो तो बड़ी सुंदर है । बहुत ही मनमोहक है, उसकी याद में कभी मुरली बजाता
            हूँ और कभी गाना गाता हूँ।</p>
          <p>Music (गाना .... लक्ष्मी जैसी हमरी....)</p>
          <button
            onClick={() => playSong(3)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 3 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 3
          </button>
          <p><strong>मुरली :</strong> मान्यवर , आप अपनी पत्नी की याद में गाना नहीं गाते ?</p>
          <p><strong>सुदामा :</strong> नहीं , नहीं , मैं नहीं गाता ऐसी गाना , मैं तो भगवान की स्तूती गाता हूँ । श्री कृष्ण
            ....2</p>
          <p><strong>मुरली :</strong> फिर भी आपको अपनी पत्नी की याद तो सताती होगी ? (मजाक के भाव में ) सच – सच बताइए ,
            सताती
            है न ? देखिए मित्र , मित्र से मन की बात छुपानी नहीं चाहिए ।बताइए, बताइए.. बताइए॥</p>
          <p><strong>सुदामा :</strong> (खिचते हुए ) .... तुम भी बड़े अजीब विचित्र प्राणी , एकदम विचित्र (उठकर जाने लगते हैं
            )
            अभी दो पल भी नहीं हुए मिले हुए , और लगी मित्रता जताने । (जाते हुए).. श्री कृष्ण श्री कृष्ण ....</p>
          <p><strong>मुरली :</strong> (सुदामा का विदा करते हुए) अरे बुरा क्यों मानते हो! मैंने बस यूँ ही पुछ लिया।</p>
          <p><strong>सुदामा :</strong> अरे भैया बस यूँ ही गाते रहोगे या चलोगे भी , अभी रास्ता बहुत लंबी है।</p>
          <p><strong>मुरली :</strong> विप्रवर ये रहा आपके भगवान श्री कृष्ण की मूर्ति । जय श्री कृष्ण .. जय श्री कृष्ण ..
          </p>
          <p><strong>सुदामा :</strong> सुनो तुम यहीं पत्थर पर आराम करो मैं अपने ईस्ट देव की स्तुति कर लेता हूँ (सुदामा
            पत्थर
            की मूर्ति को साफ करके उस पर पुष्प चढ़ाते हैं और स्तुति गाना शुरू करते हैं ।</p>
          <p>Music (नारायण नमस्तुभयम.... )</p>
          <button
            onClick={() => playSong(4)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 4 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 5
          </button>
          <p>(दोनों घर परिवार की बातें करते हुए बहुत दूर निकल जाते हैं )।</p>
        </div>
        <div className="section-6">
          <h2>
            <center>❁ दृश्य : 5 ❁</center>
          </h2>
          <p>द्वारिकापूरी तरह से दुल्हन की तरह सजी – धजी है । बड़े – बड़े महल , चौड़ी सड़कें, सजी – धजी बाजार एवं लोगों की
            काफी
            चहल पहल हैं । मुरली सुदामा को द्वारिका में एक पेड़ के नीचे बिठाते हुए पैर छूते हैं और जाने की आज्ञा लेते है ।
          </p>
          <p><strong>मुरली :</strong> लीजिए विप्रवर , द्वारिका नगरी आ गई। अब मुझे जाने की आज्ञा दीजिए ।</p>
          <p><strong>सुदामा :</strong> अच्छा , तुम्हारे साथ इतनी लंबी यात्रा कैसे समाप्त हो गई, पता ही नहीं चला।</p>
          <p><strong>मुरली :</strong> आपके साथ मेरा भी रास्ता आराम से कट गया, अच्छा अब आप अपने मित्र द्वारिकाधीश से मिलने
            जाये
            , और मुझे भी जाने दें। और हाँ आप अपने मित्र से मेरे लिए भी प्रार्थना करना । (मुरली सुदामा का पैर छूकर विदा
            लेते
            हैं।)</p>
          <p>(सुदामा द्वारिका की भव्यता और सुंदरता को देखकर आश्चर्यचकित है। लोगों की काफी चहल पहल है ।)</p>
          <p>Music (द्वारिका को देखते ही दुख सब दूर हुए .. )</p>
          <button
            onClick={() => playSong(5)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 5 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 6
          </button>
          <p>( वहीं चार ग्रामीण उनको (सुदामा) देखकर आश्चर्यचकित है । )</p>
          <p><strong>ग्रामीण 1 :</strong> आओ , आओ , ये घबराया – घबराया सा मनुष्य किसे ढूंढ रहा है ।</p>
          <p><strong>ग्रामीण 2 :</strong> ये कोई परदेसी है क्योंकि द्वारिका में तो ऐसा दरिद्र कोई हो ही नहीं सकता।</p>
          <p><strong>ग्रामीण 3 :</strong> ये कोई ब्राह्मण लगता है । (चारों ग्रामीण सुदामा को हाथ जोड़कर प्रणाम करते हैं)
          </p>
          <p><strong>सुदामा :</strong> सुखी रहो , सुखी रहो ।</p>
          <p><strong>ग्रामीण 1 :</strong> ब्राह्मण देवता , आप परदेसी लगते है किसके घर जाना है आपको, बताइए हम छोड़ देते है ।
          </p>
          <p><strong>सुदामा :</strong> भैया , श्री कृष्ण के घर जाना है , वहाँ तक पहुँचा दो , तो बड़ी कृपा होगी ।</p>
          <p>(ग्रामीण सुदामा को आश्चर्य से नीचे से ऊपर तक निहारते हुए । )</p>
          <p><strong>ग्रामीण 1 :</strong> श्री कृष्ण के घर!</p>
          <p><strong>सुदामा :</strong> हाँ, श्री कृष्ण के घर ।</p>
          <p><strong>ग्रामीण 1 :</strong> अच्छा , वो किसनमा वेला गाड़ी वाला न ?</p>
          <p><strong>सुदामा :</strong> नहीं, नहीं मैं तो द्वारिकाधीश की बात कर रहा हूँ ।</p>
          <p><strong>ग्रामीण 1 :</strong> द्वारिकाधीश?</p>
          <p><strong>सुदामा :</strong> हाँ ,उन्हीं से तो मिलने जाना है मुझे ।</p>
          <p><strong>ग्रामीण 1 :</strong> द्वारिकाधीश से मिलना है आपको!</p>
          <p><strong>सुदामा :</strong> हाँ ....</p>
          <p><strong>ग्रामीण 4 :</strong> ये महानुभाव द्वारिकाधीश से क्या काम आ पड़ा है आपको?</p>
          <p><strong>सुदामा :</strong> वे मेरे परममित्र हैं । (सभी लोग सुदामा को बड़े आश्चर्य और मजाक भरे नजरों से देखते
            हैं)
          </p>
          <p><strong>ग्रामीण 1 :</strong> तो श्री कृष्ण आपके परममित्र है ।</p>
          <p><strong>सुदामा :</strong> हाँ , कहाँ हैं उनका घर ?</p>
          <p><strong>ग्रामीण :</strong> घर अरे , वो तो राजा हैं राजा वो तो राजमहल में रहते हैं । आगे से दायें चले जाइए
            वहीं
            से उनका परिसर आरंभ हो जाता हैं ।</p>
          <p><strong>सुदामा :</strong> धन्यवाद ।</p>
          <p><strong>ग्रामीण 2 :</strong> द्वारिकाधीश को अपना मित्र बता रहा है । कोई पागल सा लगता है ।</p>
          <p>(चारों ग्रामीण हँसते हैं उसपर मजाक उड़ते हैं ) सुदामा निराश होते हुए भारी मन से श्री कृष्ण के महल के पास
            पहुंचते
            हैं । श्री कृष्ण के महल की सुंदरता देखते बनती हैं । 5-6 सैनिक और दरवाजे पे मुख्य द्वारपाल खड़े हैं )।</p>
          <p><strong>सुदामा :</strong> द्वारपाल भाई , क्या श्री द्वारिकाधीश का महल यही हैं?</p>
          <p><strong>द्वारपाल :</strong> हाँ , ब्राह्मण देवता , यही राजमहल है । आपकी दशा देखकर ऐसा लगता है की किसी ने आप
            पर
            अत्याचार किया है और आप न्याय की याचना करने आए हैं।</p>
          <p><strong>सुदामा :</strong> नहीं भैया, मुझपर किसी ने अत्याचार नहीं किया , और नाहीं तो मैं न्याय की याचना करने
            आया
            हूँ । मैं तो परदेसी हूँ । बहुत दूर से आया हूँ ।</p>
          <p><strong>द्वारपाल :</strong> तो आप कुछ दान दक्षिणा मांगने आए होंगे ।</p>
          <p><strong>सुदामा :</strong> नहीं भाई मैं तो दान दक्षिणा भी मांगने नहीं आया हूँ । मैं तो श्री कृष्ण से मिलने आया
            हूँ।</p>
          <p><strong>द्वारपाल :</strong> ना तो आपके साथ अन्याय हुआ है और ना ही अत्याचार , न आपको न्याय चाहिए, न दान
            दक्षिणा
            तो फिर आप द्वारिकाधीश से क्यों मिलना चाहते हैं?</p>
          <p><strong>सुदामा :</strong> द्वारपाल भाई , द्वारिकाधीश मेरे मित्र हैं ।</p>
          <p><strong>द्वारपाल :</strong> मित्र (आश्चर्य से )।</p>
          <p><strong>सुदामा :</strong> हाँ कोई साधारण मित्र नहीं , वो मेरे वाल सखा हैं । मेरे परम मित्र हैं हम दोनों बचपन
            में एक ही आश्रम में रहकर पढ़ाई करते थे ।</p>
          <p><strong>द्वारपाल :</strong> क्षमा करें ब्राह्मण देवता । आप समझ भी रहे हैं की आप क्या कह रहे हैं ! कहाँ श्री
            कृष्ण और कहाँ आप !</p>
          <p><strong>सुदामा :</strong> हाँ , द्वारपाल भाई , मैं सच कह रहा हूँ । श्री कृष्ण मेरे परम मित्र हैं । आप उनके
            पास
            मेरे आने का संदेशा भिजवा दें , बड़ी कृपा होगी ।</p>
          <p><strong>द्वारपाल :</strong> नहीं ब्राह्मण देवता । मैं ऐसा नहीं कर सकता हूँ।</p>
          <p><strong>सुदामा :</strong> क्या आपको एक ब्राह्मण की बातों पर विश्वास नहीं है ।</p>
          <p><strong>द्वारपाल :</strong> (सिर नहीं में हिलाते हुए ) नहीं ।</p>
          <p><strong>सुदामा :</strong> (हाथ जोड़कर) मैं आपसे विनती करता हूँ । द्वारपाल भाई, मुझे उनसे मिलवा दें , मैं बहुत
            दूर से आया हूँ ।</p>
          <p><strong>द्वारपाल :</strong> (गुस्से से) – नहीं भाई मैं आपको उनसे नहीं मिलवा सकता हूँ। आप लौट जाइए यहाँ से ।
          </p>
          <p>Music….….….….….….</p>
          <button
            onClick={() => playSong(6)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 6 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 7
          </button>
          <p><strong>द्वारपाल 2 :</strong> (मुख्य द्वारपाल से )- भैया हमें लगता है की आप इनका संदेशा द्वारिकाधिश तक पहुंचा
            दें , हो सकता है की ये ब्राह्मण देवता द्वारिकाधीश के मित्र ही हो ।</p>
          <p><strong>द्वारपाल :</strong> ठीक है भाई, मैं इनका संदेशा द्वारिकाधीश तक पहुँचा देता हूँ।</p>
          <p>(द्वारपाल सन्देशा देने अंदर जाते हैं )</p>
          <p><strong>द्वारपाल 2 :</strong> आप यहीं ठहरिए ब्राह्मणदेवता वो संदेश लेकर आते ही होंगे । (सुदामा सभी द्वारपाल
            एवं
            सैनिकों को दीन – हीन भाव से निहारते हैं तभी सभी सैनिक और द्वारपाल सुदामा पर हँसते हैं )।</p>
          <p>(सुदामा दुविधा में हैं की श्री कृष्ण से मिले या नहीं तभी सुदामा की आत्मा की आवाज आती हैं । ....</p>
          <p><strong>सुदामा की अंतः आत्मा :</strong> लौट जाओ सुदामा , लौट जाओ , देखा , बुलावा आने में कितना विलंब कर दिया
            ।
            अब श्री कृष्ण तुम्हारा मित्र नहीं है। अब वो द्वारिकाधीश बन गए हैं तुम सुदामा अपना बचपना छोड़ दो वो तुम्हें कब
            का
            भूल गए होंगे देखो कैसे सभी लोग तुम्हारा मजाक उड़ा रहें हैं । अरे तुम्हें अपनी मान सम्मान का ख्याल नहीं तो कम से
            कम श्री कृष्ण का मान सम्मान का ख्याल तो कर लो क्या प्रतिष्ठा रह जाएगी उनकी जब सबके सामने वो तुम्हें दोस्त
            कहेंगे
            । मैं कहता हूँ की शीघ्र लौट चलो सुदामा , लौट चलो । संकोच न करो तुरंत निर्णय लो।</p>
          <p>(सुदामा वहाँ से रोते हुए लौट जाता हैं ।)</p>
        </div>
        <div className="section-7">
          <h2>
            <center>
              <p>❁ दृश्य : 6 ❁</p>
            </center>
          </h2>
          <p>मुख्य द्वारपाल श्री कृष्ण के महल में प्रवेश करते हैं । श्री कृष्ण अपने महल में आराम कर रहें हैं तीनों रानियाँ
            उन्हें सजा रही है और बातें कर रही हैं ।</p>
          <p><strong>द्वारपाल :</strong> द्वारिकाधीश की जय हो ।</p>
          <p>(श्री कृष्ण कौतूहल भरी नजरों से सिर हाँ में हिलाते हुए )</p>
          <p><strong>द्वारपाल :</strong> आज्ञा हो तो एक संदेशा सुनाऊँ?</p>
          <p><strong>श्री कृष्ण :</strong> शीघ्र कहो , क्या संदेशा लाए हो ?</p>
          <p><strong>द्वारपाल :</strong> प्रभु , द्वार पर एक ब्राह्मण आया है । आपसे मिलने की आज्ञा चाहता है ।</p>
          <p><strong>श्री कृष्ण :</strong> द्वारपाल , एक ब्राह्मण को हमसे मिलने के लिए आज्ञा चाहिए ! ये विधान कब से बना ?
            कृष्ण के द्वार ऋषियों और ब्राह्मणों के लिए बंद कब से होने लगी?</p>
          <p><strong>द्वारपाल :</strong> क्षमा करें प्रभु । बात ये नहीं है ।</p>
          <p><strong>श्री कृष्ण :</strong> बात ये नहीं है तो फिर क्या बात है ।</p>
          <p><strong>द्वारपाल :</strong> प्रभु बात ये है की वो कोई साधारण व्यक्ति नहीं लगता । कोई विक्षिप्त प्राणी है ।
            आधा
            पागल सा लगता है ।</p>
          <p><strong>श्री कृष्ण :</strong> तुमने ये कैसे जाना ?</p>
          <p><strong>द्वारपाल :</strong> पहली बात तो ये है की वो परम दरिद्र दिखता है न सर पर पगड़ी न पाँव में जूता , फटी
            हुई
            धोती , द्वारिका राज्य में ऐसा दरिद्र व्यक्ति कोई नहीं हो सकता। ये कोई परदेसी है ।</p>
          <p><strong>श्री कृष्ण :</strong> परंतु परदेसी अथवा गरीब होना तो पागल की निशानी नहीं होती तो फिर तुम उसे पागल
            कैसे
            कह रहे हो ?</p>
          <p><strong>द्वारपाल :</strong> क्योंकि वो पागलों जैसी बातें कर रहा है प्रभु ।</p>
          <p><strong>श्री कृष्ण :</strong> कैसी बातें ?</p>
          <p><strong>द्वारपाल :</strong> प्रभु , वो कहता है की वो आपका परम मित्र है !</p>
          <p><strong>श्री कृष्ण :</strong> (आश्चर्य से) आ.... हमारा परम मित्र ! कौन है वो ? कहाँ से आया है ? क्या नाम है
            उसका ?</p>
          <p>Music (शीश पगा न ............ )</p>
          <button
            onClick={() => playSong(7)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 7 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 8
          </button>

          <p>(श्री कृष्ण सुदामा का नाम सुनते ही भावुक हो जाते हैं। वह अपने मित्र से मिलने के लिए व्याकुल हो जाते हैं।)</p>
          <p><strong>श्री कृष्ण :</strong> सुदामा, मेरे मित्र !(श्री कृष्णा अपने सिंहासन छोड़कर सुदामा से मिलने के लिए
            पागलों की तरह महल से बाहर दौड़ते हैं।)</p>
          <p>Background music…..नाम सुदामा का सुनते ही .... .. रूठ मित्र मनाने चले हैं।</p>
          <button
            onClick={() => playSong(8)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 8 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 9
          </button>
          <p><strong>श्री कृष्ण :</strong> सुदामा .... सुदामा .... किधर गया मेरा मित्र , ;कहाँ गया सुदामा , कहाँ गया मेरा
            मित्र, मेरे सुदामा नजर नहीं आता ?</p>
          <p><strong>सैनिक :</strong> वो तो लोट गए, द्वारिकाधीश।</p>
          <p><strong>श्रीकृष्ण :</strong> किधर?</p>
          <p><strong>सैनिक :</strong> इस तरफ, द्वारिकाधीश!</p>
          <p><strong>श्रीकृष्ण :</strong> (इशारा करते हुए) इधर?</p>
          <p><strong>सैनिक :</strong> हाँ!</p>
          <p><strong>श्री कृष्ण :</strong> सुदामा , सुदामा (जोर से चिल्लाते हुए)) सुदामा! सुदामा मेरे मित्र ।</p>
          <p><strong>द्वारपाल :</strong> (दौड़ते हुए, सैनिक से) द्वारिकाधीश किधर गए?</p>
          <p><strong>सैनिक :</strong> उस तरफ।</p>
          <p>(सुदामा का प्रवेश, सभी चारों ग्रामीण सुदामा पर हस्ते हुए)।</p>
          <p><strong>ग्रामीण 1 :</strong> देखो वो फिर से आ गया!। (चारों ग्रामीण हंसते हैं। तभी श्रीकृष्ण का व्याकुलता से
            प्रवेश।)</p>
          <p><strong>श्रीकृष्ण :</strong> सुदामा! सुदामा!....(सुदामा श्री कृष्ण को मुड़कर देखते हैं )</p>
          <p>Background Music….….….</p>
          <button
            onClick={() => playSong(9)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 9 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 9
          </button>
          <p>( दोनों मित्र गले लगा कर लिपट जाते हैं।</p>
          <p>दोनों रोने लगते हैं ।)</p>
          <p><strong>श्री कृष्ण :</strong> सुदामा, मेरे मित्र !</p>
          <p><strong>सुदामा :</strong> श्री कृष्ण, मेरे वाल सखा !</p>
          <p><strong>श्री कृष्ण :</strong> सुदामा , तुम मुझसे बिना मिले ही लौट रहे थे ?</p>
          <p><strong>सुदामा :</strong> तूने आने में बहुत देर जो लगा दी थी ।</p>
          <p><strong>श्री कृष्ण :</strong> (रोते हुए) आने में तो तूने बहुत देर लगा दी सुदामा । कितने वर्षों बाद याद किया
            है
            मुझे ।</p>
          <p><strong>सुदामा :</strong> मैं तो तुम्हें कभी भूला ही नहीं था ।</p>
          <p><strong>श्री कृष्ण :</strong> तो आए क्यों नहीं इतने वर्षों ? चलो अब सारी बातें अंदर में होगी ।</p>
          <p><strong>सुदामा :</strong> नहीं मित्र , अब मुझे यही से लौट जाने दो !</p>
          <p><strong>श्री कृष्ण :</strong> अरे तूने ऐसा सोच भी कैसे लिया की मैं तुम्हें यहीं से लौट जाने दूंगा।</p>
          <p><strong>द्वारपाल :</strong> सारे राजमहल को सजा दो और रानियों को बोलो की मेरे मित्र की स्वागत करने की तैयारी
            करें ।</p>
        </div>
        <div className="section-8">
          <h2>
            <center>
              <p>❁ दृश्य : 7 ❁</p>
            </center>
          </h2>
          <p>श्री कृष्ण का राजमहल पूरी तरह से सजा हुआ है । तीनों पटरानियाँ , थाली में फूल – माला, धूप लेकर सुदामा की आरती
            उतारती है ।
            Background Music – निज सिंहासन मित्र ।। )</p>
            <br></br>
          <button
            onClick={() => playSong(10)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 10 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 11
          </button>
          <br></br>

          <b>पैर धोने के लिए एक परात और जग रहता है</b>

          श्री कृष्ण सुदामा को अपने सिंहासन पर बैठाते हैं ।रानियाँ उनका पैर धोने के लिए थाल लाते हैं ।
          <p>(सुदामा को हल्दी, चंदन और गुलाब जल से स्नान कराया जाता है । उन्हें नया वस्त्र पहनाया जाता है)</p>
        </div>
        <div className="section-9">
          <h2>
            <center>❁ दृश्य : 8 ❁</center>
          </h2>
          <p>सुदामा आराम गृह में स्नान करके नए वस्त्र पहन कर आराम कर रहे हैं, सुदामा चावल की पोटली देखकर मन-ही-मन शर्माते
            हैं ।</p>
          <p><b>Background music –</b></p>
          <button
            onClick={() => playSong(11)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 11 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 12
          </button>
          <p>(पगला सोच रहा , ये लाज का मारा .... )</p>
          <p>सुदामा आराम गृह में पलंग पे रखा हुआ मसलंद से चावल की पोटली छुपाते है । तभी श्री कृष्ण अपने तीनों पटरानियाँ के
            साथ कक्ष में पहुँच जाते है । श्री कृष्ण सुदामा को चावल छुपते हुए देख लेते हैं ।</p>
          <p><strong>श्री कृष्ण :</strong> क्या छुपा रहे हो सुदामा ?</p>
          <p><strong>सुदामा :</strong> कुछ नहीं – कुछ नहीं ।</p>
          <p>कुछ कैसा नहीं , अवश्य कोई वस्तु छुपाई होगी तुमने ?</p>
          <p><strong>सुदामा :</strong> (शर्माते हुए , अनजान की तरह ) नहीं , कुछ नहीं ..</p>
          <p>(श्री कृष्ण सुदामा से पोटली लेने की कोशिश करते हैं लेकिन सुदामा उसे लेने नहीं देते हैं )</p>
          <p><strong>रुकमिनी :</strong> अरे-रे-रे रे , क्या कर रहे हैं आप ?</p>
          <p><strong>जामवंती :</strong> क्या अपने मेहमान पर आरोप लगाना अच्छी बात हैं प्रभु ?</p>
          <p><strong>सत्यभामा :</strong> बिल्कुल नहीं , मेहमान तो भगवान का स्वरूप होते हैं ।</p>
          <p><strong>श्री कृष्ण :</strong> अरे , तुम सब तो इसे , अभी - अभी मिली हो मैं तो इसे बचपन से जनता हु । खाने-पीने
            के
            मामले में ये एकदम स्वार्थी है । (श्री कृष्ण तकिये (मसलंद) के नीचे छुपाये हुए चावल की पोटली को लेने की कोशिश
            करते
            हैं । सुदामा लाज से उन्हें देने से रोकता हैं ।</p>
          <p><strong>श्री कृष्ण :</strong> लाओ , लाओ .... दिखाओ क्या छुपा रहे थे ? अरे दिखाओ तो , दिखाओ , दिखाओ , अरे
            दिखाओ
            न सुदामा । (सुदामा दिखाना नहीं चाहते है । )</p>
          <p>तब तो कोई स्वादिष्ट वस्तु है । जिसे तुम अकेले हड़प कर लेना चाहते हो । भाभी जी ने अवश्य मेरे लिए कोई रसीली चीज
            बनाकर भेजी होगी । अरे दिखाओ न सुदामा (श्री कृष्ण झटके से चावल की पोटली तकिये के नीचे से निकालते हैं सुदामा
            शर्म
            से लज्जित हैं श्री कृष्ण चावल की पोटली को बड़े चाव से देखते हैं।)</p>
          <p><strong>श्री कृष्ण :</strong> भाभी जी ने भेंट मेरे लिए भेजी हैं न ? .... तो तुमने अभी तक दी क्यों नहीं ? अरे
            मैं तो पहले से जानता था की भाभी कभी भी तुम्हें खाली हाथ नहीं भेजेगी । कुछ नहीं तो पान सुपारी भेज देगी या कम से
            कम दो मुट्ठी चावल ही बांध देगी मेरे लिए । ( ज्यों ही श्री कृष्ण चावल की पोटली खोलते हैं )</p>
          <p><strong>सुदामा :</strong> नहीं, नहीं .... ये पोटली मत खोलो। बात ये है की मैं जल्दी में चला आया । कुछ भी तैयार
            नहीं था तो तुम्हारी भाभी ने कहा की इसे ही ले जाओ , देवर जी इसी से मेरे स्नेह भाव को समझ जाएंगे ।</p>
          <p>(श्री कृष्ण पोटली को खोलते हैं तीनों रानियाँ बड़े हैरानी से चावल को देखती है )</p>
          <p><strong>श्री कृष्ण :</strong> अमृत लाए हो मेरे लिए और छुपाये-छुपाये फिर रहे हो । वाह ! वाह ! भाभी जी ने क्या
            भेंट भेजी है । प्यार के अमृत में भिंगे हुए ये तंदुल , प्रेम के रंग में रंगे हुए स्नेह के माणिक मोती , स्नेह
            भाव
            से सुगंधित ये अनमोल रत्न , अरे ये तो संसार के सबसे उत्तम , सबसे अनमोल भेट हैं और इसे छिपा रहे थे तुम । इन तीन
            मुट्ठी चावल पर तो मैं इन तीनों लोक वार दूँ । .... हाँ सुदामा तीनों लोक वार दूँ । ....</p>
          <p><b>Background music –</b></p>
          <button
            onClick={() => playSong(12)}
            className={`px-4 py-2 rounded-lg text-white ${currentSong === 12 && isPlaying ? "bg-red-500" : "bg-blue-500"
              } hover:bg-blue-600`}
          >
            Song 13
          </button>
          <p>( हाथ में चावल लेते ही .... )</p>
          <p>(श्री कृष्ण दो मुट्ठी चावल खाते हैं और जैसे ही वे तीसरी मुट्ठी चावल खाने लगते हैं की रुकमिनी उनका हाथ पकड़
            लेती
            है)</p>
          <p><strong>रुकमिनी :</strong> ये तो बहुत अन्याय प्रभु , आप अकेले ही भाभी की दिए हुए तंदुल खाए जा रहे हैं । हमारा
            भी तो कोई हक बनता है इस अमृत में, लाइये हमें भी दीजिए । हाँ .. हाँ .. हाँ.. हाँ</p>
          <p>(रुकमिनी चावल की पोटली श्री कृष्ण से छीनकर तीनों पटरानियाँ के साथ खाने लगती है ।)</p>
          <p><strong>रुकमिनी :</strong> हाँ , लो खाओ ।</p>
          <p><strong>श्री कृष्ण :</strong> देखा, सुदामा, मेरी एक मुट्ठी चावल का नुकसान हो गया ।</p>
          <p>(सुदामा मुसकुराते हैं ।)</p>
          <p>(श्री कृष्ण अपने मित्र सुदामा को दो मुट्ठी चावल खाकर दो लोक दे दिये , सुदामा का नगर बृंदापुरी पूरी तरह से
            द्वारिकापूरी के जैसा हो गया सुदामा का सारा दुख सुख में बदल गया । वे राजा की तरह अपने राज महल में अपने पत्नी और
            बच्चों के साथ खुशी पूर्वक रहने लगे ।)</p>
          <p><b>
            <center>
              <font size="6" color="myan"><u>(समाप्त)</u></font>
            </center>
          </b></p>


        </div>
        <div className="section-10">
          <div class="container">

            <h2>This drama is written by Subodh Kumar.</h2>
            <h3>
              <p>Vishnupuri (<span class="highlight">Miyan Bigha</span>), Nardigang, Nawadah, Bihar,</p>
              <p>Mobile no. - 9334003519</p>
            </h3>
          </div>
        </div>



      </div>



    </div>

  );
};

export default MusicPlayer;
