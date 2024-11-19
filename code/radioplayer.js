// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
const channelsElement = document.getElementById("channels");

async function getRadio() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();

  data.channels.forEach((channel) => {
    const channelDiv = document.createElement("div");
    channelDiv.setAttribute("class", "channelDiv");
    channelDiv.style.backgroundColor = "#" + channel.color;

    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    image.setAttribute("class", "image");
    image.src = channel.image;
    image.alt = channel.imagetemplate;
    imageDiv.append(image);

    const contentDiv = document.createElement("div");
    contentDiv.style.display = "flex";
    contentDiv.style.flexDirection = "column";

    const channelName = document.createElement("h3");
    channelName.textContent = channel.name;
    channelName.style.marginLeft = "10px";

    const audioTag = document.createElement("audio");
    audioTag.controls = true;
    audioTag.setAttribute("class", "audio");

    const audioSource = document.createElement("source");
    audioSource.src = channel.liveaudio.url;
    audioSource.type = "audio/mpeg";

    audioTag.append(audioSource);
    contentDiv.append(channelName, audioTag);
    channelDiv.append(imageDiv, contentDiv);
    channelsElement.append(channelDiv);
  });
}

getRadio();

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
