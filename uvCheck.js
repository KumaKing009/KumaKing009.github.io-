function onButtonClick()
{
    let uvValue = document.getElementById("uvIndex").value;
    let sendMessage = "";
    switch (uvValue)
    {
        case "白":
            sendMessage = "そこまで紫外線が強くないので、日焼け止めクリームはこれがいいぞ！";
            document.getElementById("linkArea").href = "https://www.nivea.co.jp/products/protectwatergel-49013012987440052.html";
            document.cream.src = "日焼け止めクリーム普段用.jpg";
            ddocument.getElementById("message").innerHTML = sendMessage;
            break;
        case "薄いピンク":
            sendMessage =
                "紫外線がそこそこ強い。SPF30程度のクリームを塗ろう！";
            document.getElementById("linkArea").href = "https://www.muji.net/store/list/?selectedAllList=%E6%97%A5%E7%84%BC%E3%81%91%E6%AD%A2%E3%82%81&selectedFreeWordList=%E6%97%A5%E7%84%BC%E3%81%91%E6%AD%A2%E3%82%81&sectionCd=";
            document.cream.src = "日焼け止めクリームSPF30+.jpg";
            document.getElementById("message").innerHTML = sendMessage;
            break;
        case "ピンク":
            sendMessage =
                "今日は紫外線が強い。きちんと2時間おきに塗りなおそう！ SPF50+のクリームがいいぞ！";
            document.getElementById("linkArea").href = "https://www.amazon.co.jp/%E3%82%A2%E3%83%8D%E3%83%83%E3%82%B5-%E3%83%91%E3%83%BC%E3%83%95%E3%82%A7%E3%82%AF%E3%83%88UV-%E3%82%B9%E3%82%AD%E3%83%B3%E3%82%B1%E3%82%A2%E3%83%9F%E3%83%AB%E3%82%AF-SPF50-60mL/dp/B0792L2PQT/ref=sr_1_5?hvadid=355110926571&hvdev=c&jp-ad-ap=0&keywords=%E8%B3%87%E7%94%9F%E5%A0%82+%E3%82%A2%E3%83%8D%E3%83%83%E3%82%B5+%E6%97%A5%E7%84%BC%E3%81%91%E6%AD%A2%E3%82%81&qid=1566052812&s=gateway&sr=8-5";
            document.cream.src = "日焼け止めクリームSPF50+.jpg";
            document.getElementById("message").innerHTML = sendMessage;
            break;
        case "濃いピンク":
            sendMessage =
                "非常に紫外線が強いぞ！絶対に日焼け止めクリームを塗ろう！"
            document.getElementById("linkArea").href = "https://www.amazon.co.jp/%E3%82%A2%E3%83%8D%E3%83%83%E3%82%B5-%E3%83%91%E3%83%BC%E3%83%95%E3%82%A7%E3%82%AF%E3%83%88UV-%E3%82%B9%E3%82%AD%E3%83%B3%E3%82%B1%E3%82%A2%E3%83%9F%E3%83%AB%E3%82%AF-SPF50-60mL/dp/B0792L2PQT/ref=sr_1_5?hvadid=355110926571&hvdev=c&jp-ad-ap=0&keywords=%E8%B3%87%E7%94%9F%E5%A0%82+%E3%82%A2%E3%83%8D%E3%83%83%E3%82%B5+%E6%97%A5%E7%84%BC%E3%81%91%E6%AD%A2%E3%82%81&qid=1566052812&s=gateway&sr=8-5";
            document.cream.src = "日焼け止めクリームSPF50+.jpg";
            document.getElementById("message").innerHTML = sendMessage;
            break;
        case "よくわからない色":
            sendMessage = "もう一度よく見てみよう！";
            document.getElementById("message").innerHTML = sendMessage;
            break;
        default:
            sendMessage = "どんなピンクなのかを教えてくれ！";
            document.getElementById("message").innerHTML = sendMessage;
            break;
    }
};