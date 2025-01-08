// // tailwind.config.ts
// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//     },
//   },
//   plugins: [],
// }
// export default config
// import type { Config } from "tailwindcss";
// import plugin from "tailwindcss/plugin";
// import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors";

// // Custom function to flatten the color palette
// function flattenColors(themeColors: Record<string, any>): Record<string, string> {
//   const flattened: Record<string, string> = {};

//   const flatten = (colors: any, prefix = "") => {
//     for (const key in colors) {
//       if (typeof colors[key] === "string") {
//         flattened[`${prefix}${key}`] = colors[key];
//       } else {
//         flatten(colors[key], `${prefix}${key}-`);
//       }
//     }
//   };

//   flatten(themeColors);
//   return flattened;
// }

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//     },
//   },
//   plugins: [
//     plugin(function ({ addBase, theme }) {
//       const themeColors = theme("colors");
//       const flattenedColors = flattenColors(themeColors);

//       const cssVariables = Object.fromEntries(
//         Object.entries(flattenedColors).map(([key, value]) => [`--${key}`, value])
//       );

//       addBase({
//         ":root": cssVariables,
//       });
//     }),
//   ],
// };

// export default config;
// tailwind.config.ts

import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";


// Custom function to flatten the color palette
function flattenColors(themeColors: Record<string, any>): Record<string, string> {
  const flattened: Record<string, string> = {};

  const flatten = (colors: any, prefix = "") => {
    for (const key in colors) {
      if (typeof colors[key] === "string") {
        flattened[`${prefix}${key}`] = colors[key];
      } else {
        flatten(colors[key], `${prefix}${key}-`);
      }
    }
  };

  flatten(themeColors);
  return flattened;
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      // Ensure theme("colors") is cast to Record<string, any> to avoid type issues
      const themeColors = theme("colors") as Record<string, any>;

      // Call flattenColors with a non-null value
      if (themeColors) {
        const flattenedColors = flattenColors(themeColors);

        const cssVariables = Object.fromEntries(
          Object.entries(flattenedColors).map(([key, value]) => [`--${key}`, value])
        );

        addBase({
          ":root": cssVariables,
        });
      }
    }),
      require("tailwindcss-animate")
],
};

export default config;
