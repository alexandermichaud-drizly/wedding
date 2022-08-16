import WineShop from '../../../assets/venue_photos/wine_shop.jpg';
import VillaEntrance from '../../../assets/venue_photos/villa_entrance.jpg';
import Castle from '../../../assets/venue_photos/castle.jpg';
import CypressTrees from '../../../assets/venue_photos/cypress_trees.jpg';
import RoadToCastle from '../../../assets/venue_photos/road_to_castle.jpg';
import Valley from '../../../assets/venue_photos/valley.jpg';
import Olio from '../../../assets/venue_photos/olio.jpg';
import Magnum from '../../../assets/venue_photos/magnum.jpg';
import Window from '../../../assets/venue_photos/window.jpg';
import CastleFromADistance from '../../../assets/venue_photos/castle_from_a_distance.jpg';
import Door from '../../../assets/venue_photos/door.jpg';
import Chairs from '../../../assets/venue_photos/chairs.jpg';
import Hearth from '../../../assets/venue_photos/hearth.jpg';
import Garden from '../../../assets/venue_photos/garden.jpg';
import Barrels from '../../../assets/venue_photos/barrels.jpg';
import Well from '../../../assets/venue_photos/well.jpg';
import Gate from '../../../assets/venue_photos/gate.jpg';
import Cellar from '../../../assets/venue_photos/cellar.jpg';
import LakeView from '../../../assets/venue_photos/lake_view.jpg';
import Wines from '../../../assets/venue_photos/wines.jpg';
import Restaurant from '../../../assets/venue_photos/restaurant.jpg';
import BasilGarden from '../../../assets/venue_photos/basil_garden.jpg';
import CastelloDelTrebbio from '../../../assets/venue_photos/castello_del_trebbio.jpg';
import Vineyard from '../../../assets/venue_photos/vineyard.jpg';
import CastleNight from '../../../assets/venue_photos/castle_night.jpg';
import Terrace from '../../../assets/venue_photos/terrace.jpg';
import Patio from '../../../assets/venue_photos/patio.jpg';
import LongTable from '../../../assets/venue_photos/long_table.jpg';
import Wall from '../../../assets/venue_photos/wall.jpg';
import Arch from '../../../assets/venue_photos/arch.jpg';
import Millstone from '../../../assets/venue_photos/millstone.jpg';
import Lake from '../../../assets/venue_photos/lake.jpg';
import Villa from '../../../assets/venue_photos/villa.jpg';

import CheekKiss from '../../../assets/engagement_photos/cheek_kiss.jpg';
import Dinner from '../../../assets/engagement_photos/dinner.jpg';
import Drink from '../../../assets/engagement_photos/drink.jpg';
import FeaturedPhoto from '../../../assets/engagement_photos/featured_photo.jpg';
import Fireworks from '../../../assets/engagement_photos/fireworks.jpg';
import Hotel from '../../../assets/engagement_photos/hotel.jpg';
import Kiss from '../../../assets/engagement_photos/kiss.jpg';
import Knee from '../../../assets/engagement_photos/knee.jpg';
import LightWriting from '../../../assets/engagement_photos/light_writing.jpg';
import NextDay from '../../../assets/engagement_photos/next_day.jpg';
import Obelisk from '../../../assets/engagement_photos/obelisk.jpg';
import Ring from '../../../assets/engagement_photos/ring.jpg';
import Shoulder from '../../../assets/engagement_photos/shoulder.jpg';
import SpanishSteps from '../../../assets/engagement_photos/spanish_steps.jpg';
import Stumbling from '../../../assets/engagement_photos/stumbling.jpg';
import Tree from '../../../assets/engagement_photos/tree.jpg';
import UnderTheLights from '../../../assets/engagement_photos/under_the_lights.jpg';

type Photo = {
  src: string;
  alt: string;
  cols?: number;
  rows?: number;
};

export const VENUE_PHOTOS: Photo[] = [
  {
    src: CastelloDelTrebbio,
    alt: 'Castello del Trebbio',
  },
  {
    src: Vineyard,
    alt: 'Vineyard',
    cols: 2,
    rows: 2,
  },
  {
    src: WineShop,
    alt: 'Wine Shop',
    rows: 2,
  },
  {
    src: BasilGarden,
    alt: 'Basil Garden',
  },
  {
    src: RoadToCastle,
    alt: 'Road to Castle',
    rows: 2,
  },
  {
    src: VillaEntrance,
    alt: 'Villa Entrance',
  },
  {
    src: Castle,
    alt: 'Castle',
    cols: 2,
    rows: 2,
  },
  {
    src: Garden,
    alt: 'Garden',
  },
  {
    src: Olio,
    alt: 'Olio',
  },
  {
    src: Valley,
    alt: 'Valley',
  },
  {
    src: Well,
    alt: 'Well',
    rows: 2,
  },
  {
    src: Millstone,
    alt: 'Millstone',
  },
  {
    src: CypressTrees,
    alt: 'Cypress Trees',
  },
  {
    src: Hearth,
    alt: 'Hearth',
  },
  {
    src: Door,
    alt: 'Door',
  },
  {
    src: Chairs,
    alt: 'Chairs',
  },
  {
    src: CastleFromADistance,
    alt: 'Castle From a Distance',
  },
  {
    src: Barrels,
    alt: 'barrels',
  },
  {
    src: Window,
    alt: 'Window',
  },
  {
    src: Lake,
    alt: 'Lake',
  },
  {
    src: Cellar,
    alt: 'Cellar',
    cols: 2,
  },
  {
    src: Magnum,
    alt: 'Magnum',
  },
  {
    src: Patio,
    alt: 'Patio',
  },
  {
    src: Wines,
    alt: 'Wines',
  },
  {
    src: Terrace,
    alt: 'Terrace',
  },
  {
    src: Villa,
    alt: 'Villa',
  },
  {
    src: Arch,
    alt: 'Arch',
  },
  {
    src: LongTable,
    alt: 'Long Table',
  },
  {
    src: LakeView,
    alt: 'Lake View',
  },
  {
    src: Wall,
    alt: 'Wall',
  },
  {
    src: CastleNight,
    alt: 'Castle Night',
    rows: 2,
    cols: 3,
  },
  {
    src: Restaurant,
    alt: 'Restaurant',
  },
  {
    src: Gate,
    alt: 'Gate',
  },
];

export const ENGAGEMENT_PHOTOS: Photo[] = [
  {
    src: FeaturedPhoto,
    alt: 'Featured Photo',
    cols: 2,
    rows: 2,
  },
  {
    src: SpanishSteps,
    alt: 'Spanish Steps',
  },
  {
    src: NextDay,
    alt: 'Next Day',
  },
  {
    src: Hotel,
    alt: 'Hotel',
    cols: 2,
  },
  {
    src: Fireworks,
    alt: 'Fireworks',
  },
  {
    src: UnderTheLights,
    alt: 'Under the Lights',
  },
  {
    src: Knee,
    alt: 'Knee',
    rows: 2,
    cols: 2,
  },
  {
    src: Ring,
    alt: 'Ring',
  },
  {
    src: Drink,
    alt: 'Drink',
  },
  {
    src: Shoulder,
    alt: 'Shoulder',
  },
  {
    src: Kiss,
    alt: 'Kiss',
  },
  {
    src: Dinner,
    alt: 'Dinner',
  },
  {
    src: LightWriting,
    alt: 'Light Writing',
  },
  {
    src: Tree,
    alt: 'Tree',
    cols: 2,
    rows: 2,
  },
  {
    src: CheekKiss,
    alt: 'Cheek Kiss',
  },
  {
    src: Obelisk,
    alt: 'Obelisk',
  },
  {
    src: Stumbling,
    alt: 'Stumbling',
    cols: 2,
  },
];
