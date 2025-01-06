import WithBundleAnalyzer from "@next/bundle-analyzer";

export default WithBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});