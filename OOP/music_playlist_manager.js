//Music Playlist Manager
// Task: Create a Song class and use it to build a mini playlist.

// Goal: Solidify understanding the need for OOP

// Requirements:
// Create a Song class with:
// - Properties: title, artist, duration (in seconds), genre
// - A method called play() that prints: "Now playing: [title] by [artist]"
// - A method called getDurationMinutes() that returns the duration in a readable format like "3:45"
// - A method isLongSong() that returns True if the song is over 5 minutes

// Create at least 3 song objects with your favorite songs
// "Play" all the songs in order

// Solution:
class Song {
  constructor(title, artist, duration, genre) {
    this.title = title
    this.artist = artist
    this.duration = duration
    this.genre = genre
  }
  play() {
    console.log(`🎶Now Playing: ${this.title} by ${this.artist}`)
  }
  getDurationMinutes() {
    const durationInSeconds = this.duration
    // extracting minutes from durationInSeconds
    const minutes = Math.floor(this.duration/60)
    // extracting seconds from durationInSeconds
    const seconds = this.duration%60
    return `${minutes}:${(seconds.toString()).padStart(2, '0')}` // to convert '3:5' --> '3:05' if second's part is less than 10
  }
  isLongSong() {
    // checking whether song is longer than 5 minutes
    return this.duration > 300  
  }
}

// creating 3 song objects
const song1 = new Song('The Night We Met', 'Lord Huron', 305, 'Indie')
const song2 = new Song('Wolves', 'Selena Gomez, Marshmello', 197, 'EDM, Pop')
const song3 = new Song('Interstellar Main Theme', 'Hans Zimmer', 776, 'Classical')

// storing songs in an order
const songs = [song1, song2, song3]

// playing songs in order & displaying their duration duration
songs.map((song)=>{
  song.play()
  console.log(song.getDurationMinutes()) 
})
