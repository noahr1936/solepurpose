export default function serialize<T>(data: T) {
    return JSON.parse(JSON.stringify(data));
}
