import { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {};

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === "true",
};

export default withBundleAnalyzer(bundleAnalyzerConfig)(nextConfig);