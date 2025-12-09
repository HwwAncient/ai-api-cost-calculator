# AI API Cost Calculator

Forecast your LLM API costs with precision. This tool allows you to translate business metrics like **Monthly Active Users (MAU)** into accurate infrastructure forecasts and unit economics for major AI providers including OpenAI, Anthropic, and Google Gemini.

## 🚀 Key Features

*   **MAU-Based Forecasting**: Calculate costs based on real-world usage metrics (MAU, active days, requests per day) rather than just raw token counts.
*   **Multi-Model Comparison**: Compare costs across a wide range of models (GPT-4, Claude 3.5, Gemini 1.5, etc.) side-by-side.
*   **Smart Token Conversion**: Toggle between **Word** and **Token** modes to estimate costs based on content length without needing to know exact token ratios.
*   **Scenario Presets**: One-click configuration for common use cases:
    *   🤖 **Support Bot**: High volume, short interactions.
    *   💻 **Coding Agent**: Large context windows, complex outputs.
    *   ❤️ **Companion**: frequent, conversational interactions.
    *   🔍 **RAG Search**: Heavy input context, concise outputs.
*   **Visual Analytics**:
    *   **Interactive Charts**: Visualize cost disparities across providers.
    *   **Cost Cards**: View monthly costs, daily averages, and cost-per-user metrics.
    *   **Sorting & Filtering**: Easily identify the most capital-efficient models.
*   **Up-to-Date Pricing**: Includes pricing for the latest 2025 models (Gemini 2.5 Flash, GPT-5 series placeholders, etc.).

## 🛠 Tech Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Charts**: [Recharts](https://recharts.org/)

## 🏁 Getting Started

Follow these steps to run the project locally:

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd ai-api-cost-calculator
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the application.

## 📂 Project Structure

```
.
├── src/
│   ├── components/         # UI Components
│   │   ├── Calculator.tsx  # Main logic wrapper
│   │   ├── ModelSelector.tsx # Sidebar for model selection
│   │   ├── ComparisonChart.tsx # Visualizations
│   │   └── ...
│   ├── constants.ts        # Model pricing and preset data
│   ├── types.ts            # TypeScript interfaces
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
├── public/                 # Static assets
└── ...
```

## 💡 How to Use

1.  **Select a Scenario**: Choose a preset (e.g., "Coding Agent") to auto-fill typical usage patterns, or manually enter your own.
2.  **Adjust Usage Parameters**:
    *   **MAU**: Set your expected monthly active users.
    *   **Activity**: Define how often users engage and how many requests they make.
    *   **Payload**: Define average input and output sizes (in words or tokens).
3.  **Select Models**: Use the sidebar to select the models you want to compare. You can filter by provider or select individual models.
4.  **Analyze Results**: Review the "Estimated Monthly Cost" cards to see the total cost, daily average, and cost per user. Use the charts to visualize the spread.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact
For personal communication related to this project, please contact Wanwei He (`wanweihe2019@gmail.com`).