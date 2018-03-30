import { Component } from '@angular/core';
import { Park } from './models/park.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedPark = null;

  masterParkList: Park[] = [
    new Park('Alcatraz Island', 'San Francisco, CA', 'CA', 'Alcatraz Island offers a close-up look at the site of the first lighthouse and US built fort on the West Coast, the infamous federal penitentiary long off-limits to the public, and the history making 18 month occupation by Indians of All Tribes. Rich in history, there is also a natural side to the Rock—gardens, tide pools, bird colonies, and bay views beyond compare.'),
    new Park('Redwood', 'Del Norte & Humboldt counties , CA', 'CA', 'Most people know Redwood as home to the tallest trees on Earth. The parks also protect vast prairies, oak woodlands, wild riverways, and nearly 40 miles of rugged coastline. For thousands of years people have lived in this verdant landscape. Together, the National Park Service and California State Parks manage these lands for the inspiration, enjoyment, and education of all.'),
    new Park ('Yosemite', 'the Sierra Nevada, CA', 'CA', 'Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.'),
    new Park ('Crater Lake', 'Crater Lake, OR', 'OR', 'Crater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak. Scientists marvel at its purity: fed by rain and snow, it’s the deepest lake in the USA and perhaps the most pristine on earth. Artists, photographers, and sightseers gaze in wonder at its blue water and stunning setting atop the Cascade Mountain Range.'),
    new Park ('Mount Rainer', 'Ashford, Enumclaw, Packwood, Wilkeson, WA', 'WA', 'Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning six major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits.'),
    new Park ('Olympic', 'Port Angeles, WA', 'WA', 'With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!')
  ]

}
