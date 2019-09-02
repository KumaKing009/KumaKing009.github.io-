window.onload = function ()
{
    initVConsole();
    initLiff();
}
// Initialize vConsole
function initVConsole()
{
    window.vConsole = new window.VConsole({
        defaultPlugins: ['system', 'network', 'element', 'storage'],
        maxLogNumber: 1000,
        onReady: function ()
        {
            console.log('vConsole is ready.');
        },
        onClearLog: function ()
        {
            console.log('on clearLog');
        }
    });
}

// Initialize LIFF
function initLiff()
{
    console.log('going to initialize LIFF');
    liff.init(
        data =>
        {
            console.log('LIFF initialized!');
            // Now you can call LIFF API
            const userId = data.context.userId;
            liff.getProfile().then(profile =>
            {
                const userDisplayName = profile.displayName
                console.info('User name is', userDisplayName);
            })
                .catch((err) =>
                {
                    console.error('LIFF getProfile failed', err);
                });
        },
        err =>
        {
            console.error('LIFF initialization failed', err);
        }
    );
}

$(function sendImage()
{
    const DavidStatue = 'その肉体美は、一つの理想。栄養バランスの良い小松菜とブロッコリーと夏蜜柑のプロテインスムージーで、少しでも理想に近づこう！';
    const LaoconeStatue = '作者不明だが、それも相まってロマンを掻き立てる作品。筋トレをした後にブルーベリーとバナナとヨーグルトのプロテインスムージーを飲み、ロマンを感じ取ろう！';
    const SocratesDeath = '知力とは筋肉である。ほうれん草とバナナのプロテインスムージーで、意思を貫徹する筋力を培おう！';
    const DyingSlave = '未完ゆえの美か、作者の飽くなき探求心の発露か。リンゴとイチゴと豆乳のプロテインスムージーで頭のモヤを晴らし、哲学に耽ろう。それもまた筋トレ。';
    const TheThinker = '地獄とは何か、この作品と共に思案に暮れるのも一興。小松菜とバナナとヨーグルトのプロテインスムージーで、思考する筋力を付けよう！';
    const Bacchus = '美酒に酔う感覚は得も言われぬ快感だ。しかし、プロテインスムージーとお酒の相性は最悪なので、やめようね！';
    const artFolderPath = "yourPictureFolderPath";
    const params = {
        // Request parameters
        "iterationId": "18035052-8220-4031-8635-01d8c00f419e",
    };

    $.ajax({
        url: "yourCustomVisionURL" + $.param(params),
        beforeSend: function (xhrObj)
        {
            // Request headers
            xhrObj.setRequestHeader("Content-Type", "multipart/form-data");
            xhrObj.setRequestHeader("Prediction-key", "yourPredictionKey");
        },
        type: "POST",
        data: $("input[name='file']").prop("files")[0],
        processData: false,
        contentType: false
    })
        .done(function (data)
        {
            console.log(data)
            console.log(data["predictions"][0]["tagName"])
            switch (data["predictions"][0]["tagName"])
            {
                case "Statue de David":
                    sendMessage = DavidStatue;
                    document.art.src = artFolderPath + "../KumaKing009.github.io/ArtDeSmoothie/DavidStatue/images.jpg";
                    document.getElementById("message").innerHTML = sendMessage;
                    document.getElementById("linkArea").href = "https://ja.wikipedia.org/wiki/ダビデ像_(ミケランジェロ)";
                    break;
                case "Statue Lao Cone":
                    sendMessage = LaoconeStatue;
                    document.art.src = artFolderPath + "../KumaKing009.github.io/ArtDeSmoothie/LaoconeStatue/images.jpg";
                    document.getElementById("message").innerHTML = sendMessage;
                    document.getElementById("linkArea").href = "https://ja.wikipedia.org/wiki/ラオコーン像";
                    break;
                case "La Mort de Socrate":
                    sendMessage = SocratesDeath;
                    document.art.src = artFolderPath + "../KumaKing009.github.io/ArtDeSmoothie/SocratesDeath/Jean-Francois-Pierre-Peyron-The-Death-of-Socrates-4-.jpg";
                    document.getElementById("message").innerHTML = sendMessage;
                    document.getElementById("linkArea").href = "https://ja.wikipedia.org/wiki/ソクラテスの死";
                    break;
                case "Esclave noyé":
                    sendMessage = DyingSlave;
                    document.art.src = artFolderPath + "../KumaKing009.github.io/ArtDeSmoothie/DyingSlave/slave3.jpg";
                    document.getElementById("message").innerHTML = sendMessage;
                    document.getElementById("linkArea").href = "https://www.louvre.fr/jp/oeuvre-notices/《奴隷》";
                    break;
                case "Penseur":
                    sendMessage = TheThinker;
                    document.art.src = artFolderPath + "../KumaKing009.github.io/ArtDeSmoothie/TheThinker/71ftr9cPGAL._SX342_.jpg";
                    document.getElementById("message").innerHTML = sendMessage;
                    document.getElementById("linkArea").href = "https://ja.wikipedia.org/wiki/考える人_(ロダン)";
                    break;
                case "Statue de Bacchus":
                    sendMessage = Bacchus;
                    document.art.src = artFolderPath + "../KumaKing009.github.io/ArtDeSmoothie/Bacchus/images (1).jpg";
                    document.getElementById("message").innerHTML = sendMessage;
                    document.getElementById("linkArea").href = "https://ja.wikipedia.org/wiki/バックス_(ローマ神話)";
                    break;
                case "Statue":
                    sendMessage = "もう一度試したまえ。";
                    document.getElementById("message").innerHTML = sendMessage;
                    document.getElementById("art").src = "reonidas.jpg";
                    break;
                default:
                    sendMessage = "もう一度試したまえ。";
                    document.getElementById("message").innerHTML = sendMessage;
                    document.getElementById("art").src = "reonidas.jpg";
                    break;
            }
        })
        .fail(function ()
        {
            document.getElementById("message").innerHTML = "もう一度試したまえ。";
        });
})
