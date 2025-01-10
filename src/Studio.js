import listener from "./listener"

class Studio {
    init() {
        listener();
    }
}

const app = new Studio();
export default app;
