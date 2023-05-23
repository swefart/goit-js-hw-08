import {save, load} from "./storage"
import throttle from "lodash.throttle";
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe)

const storageKey = 'videoplayer-current-time';


 player.on('timeupdate', throttle((data) => {
        save(storageKey, data.seconds)
 }, 1000));
        
document.addEventListener("DOMContentLoaded", setCurrentTimeAfterReload)

function setCurrentTimeAfterReload() {
    const currentTime = load(storageKey)
    if (currentTime === undefined) {
        player.setCurrentTime(0)
    } 
    player.setCurrentTime(currentTime)
}

