/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withNexIntl = createNextIntlPlugin();
const nextConfig = {};

// export default nextConfig;
export default withNexIntl(nextConfig);
