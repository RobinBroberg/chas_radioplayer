// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
const channelsElement = document.getElementById("channels");
channelsElement.style.display = "flex";
channelsElement.style.flexDirection = "column";
channelsElement.style.alignItems = "center";

async function getRadio() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();

  data.channels.forEach((channel) => {
    const channelDiv = document.createElement("div");
    channelDiv.style.display = "flex";
    channelDiv.style.alignItems = "center";
    channelDiv.style.backgroundColor = "#" + channel.color;
    channelDiv.style.padding = "10px";
    channelDiv.style.margin = "10px";
    channelDiv.style.borderRadius = "10px";
    channelDiv.style.width = "800px";
    channelDiv.style.maxWidth = "90%";

    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = channel.image;
    image.alt = channel.imagetemplate;
    image.style.width = "200px";
    image.style.marginRight = "20px";
    image.style.maxWidth = "100%";
    imageDiv.appendChild(image);

    const contentDiv = document.createElement("div");
    contentDiv.style.display = "flex";
    contentDiv.style.flexDirection = "column";

    const channelName = document.createElement("h3");
    channelName.textContent = channel.name;
    channelName.style.marginLeft = "10px";

    const audioTag = document.createElement("audio");
    audioTag.setAttribute("controls", "controls");
    audioTag.style.maxWidth = "100%";

    const audioSource = document.createElement("source");
    audioSource.src = channel.liveaudio.url;
    audioSource.type = "audio/mpeg";

    audioTag.appendChild(audioSource);

    contentDiv.appendChild(channelName);
    contentDiv.appendChild(audioTag);

    channelDiv.appendChild(imageDiv);
    channelDiv.appendChild(contentDiv);

    channelsElement.appendChild(channelDiv);
  });
}

getRadio();

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
