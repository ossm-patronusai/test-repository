// New features file
export const features = {
  greeting: true,
  version: '1.0.0',
  experimental: false
};

export function checkFeature(featureName) {
  return features[featureName] || false;
}
