import { ResponsiveSunburst } from "@nivo/sunburst";

const NetflixOriginalMovieChart = ({ data }) => (
  <ResponsiveSunburst
    data={data}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    id="name"
    value="loc"
    borderWidth={10}
    borderColor={{ theme: "background" }}
    colors={{ scheme: "nivo" }}
    childColor={{ from: "color", modifiers: [["brighter", "0.1"]] }}
    enableArcLabels={true}
    arcLabelsSkipAngle={4}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", "1.4"]] }}
  />
);

export default NetflixOriginalMovieChart;
