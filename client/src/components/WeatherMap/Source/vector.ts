import { Vector as VectorSource } from 'ol/source';

function vector(props: any) {
	const { features } = props;
	return new VectorSource({
		features
	});
}

export default vector;
