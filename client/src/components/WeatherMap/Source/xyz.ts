import * as olSource from "ol/source";

function xyz(props: any) {
	const { url, attributions, maxZoom } = props;
	return new olSource.XYZ({ url, attributions, maxZoom });
}

export default xyz;
