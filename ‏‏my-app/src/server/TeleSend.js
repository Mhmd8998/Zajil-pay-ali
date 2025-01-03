import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "   مدونة زاجل ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1324587290982617219/cWya52S-a49NbAsAO7tHzKOSG3B_N3eYlLFHnco0BhjXesZeGyWjYrMJs69XqNubW1sK",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
