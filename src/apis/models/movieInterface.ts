export interface Movie {
    baseUrl: string;
    apiKey: string;
    originalImage: (imgPath: string) => string;
    w500Image: (imgPath: string) => string;
}