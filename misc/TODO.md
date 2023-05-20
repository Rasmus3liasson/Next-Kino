# function som skapar randScreening
  * displayDate: random date ✅
  * saaloon: 'Matsalen', 'Stora Salongen', 'Lilla Salongen'
  * spokenLang: "en-GB" || "se-SV"
  * subtitLang: "en-GB" || "se-SV" | null;
  
  export type screening = {
  displayDate: Date;
  saloon: string;
  spokenLang: "en-GB" | "se-SV";
  subtitLang: "en-GB" | "se-SV" | null;
};          