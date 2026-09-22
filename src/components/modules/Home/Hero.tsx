"use client";

import { useState } from "react";
import { Clock, Video, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface HeroSectionProps {
  badge?: string;
  headingLine1?: string;
  headingAccent?: string;
  headingLine2?: string;
  description?: string;
  inputPlaceholder?: string;
  ctaLabel?: string;
  suggestions?: string[];
  stats?: Stat[];
  onSearch?: (query: string) => void;
}

// ── Defaults ──────────────────────────────────────────────────────────────────

const defaultSuggestions = [
  "Chest tightness when I climb stairs",
  "Itchy red rash on my arm",
  "Constant headaches and dizziness",
  "My toddler has a high fever",
  "Panic attacks and poor sleep",
];

const defaultStats: Stat[] = [
  {
    icon: <Clock size={16} className="text-[#008385]" />,
    value: "< 15 min",
    label: "Average wait",
  },
  {
    icon: <Video size={16} className="text-[#008385]" />,
    value: "24/7",
    label: "Video consults",
  },
  {
    icon: <ShieldCheck size={16} className="text-[#008385]" />,
    value: "HIPAA",
    label: "Compliant & encrypted",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export function HeroSection({
  badge = "AI-driven doctor suggestion",
  headingLine1 = "Type your symptoms.",
  headingAccent = "Get the top doctors",
  headingLine2 = "in the right specialty.",
  description = "Describe what you feel in plain words. Health-Care's AI detects the matching medical category and ranks the best-fit specialists — then you consult them over secure video in minutes.",
  inputPlaceholder = "e.g. Itchy red rash on my arm",
  ctaLabel = "Find my doctor",
  suggestions = defaultSuggestions,
  stats = defaultStats,
  onSearch,
}: HeroSectionProps) {
  const [query, setQuery] = useState("");

  function handleSearch() {
    onSearch?.(query);
  }

  function handleSuggestionClick(text: string) {
    setQuery(text);
    onSearch?.(text);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <section className="w-full bg-white">
      {/* ── outer padding: tighter on mobile, generous on desktop ── */}
      <div className="mx-auto  px-4 py-10 sm:px-6 sm:py-14 md:py-20 lg:px-8 lg:py-24">

        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#e5e5e5] bg-white px-2.5 py-1 sm:mb-6">
          <Sparkles size={11} className="text-[#008385]" />
          <span
            className="text-[11px] font-medium text-[#113338] sm:text-xs"
            style={{ fontFeatureSettings: '"dlig" 1' }}
          >
            {badge}
          </span>
        </div>

        {/* Heading
            Mobile  : 30px, single-column stack
            Tablet  : 40px
            Desktop : 48px, same line layout as design  */}
        <h1
          className="mb-4 text-[30px] font-semibold leading-[1.15] text-[#0a0a0a]
                     sm:mb-5 sm:text-[40px]
                     lg:text-[48px]"
          style={{ fontFeatureSettings: '"dlig" 1', letterSpacing: "-0.025em" }}
        >
          {headingLine1}
          <br />
          <span className="text-[#008385]">{headingAccent} </span>
          <span className="text-[#0a0a0a]">{headingLine2}</span>
        </h1>

        {/* Description */}
        <p
          className="mb-7 text-sm leading-[1.75] text-[#5d6c71]
                     sm:mb-8 sm:text-base
                     md:text-[17px]"
          style={{ fontFeatureSettings: '"dlig" 1' }}
        >
          {description}
        </p>

        {/* Search box
            Mobile  : stacked (input on top, button full-width below)
            ≥ sm    : inline row                                          */}
        <div className="mb-3 max-w-4xl sm:mb-4">
          {/* Inline layout ≥ sm */}
          <div
            className="hidden sm:flex items-center gap-2 rounded-xl border border-[#e5e5e5]
                       bg-white px-3 py-2 shadow-sm"
          >
            <Stethoscope size={16} className="shrink-0 text-[#5d6c71]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={inputPlaceholder}
              className="min-w-0 flex-1 bg-transparent text-sm text-[#0a0a0a]
                         placeholder:text-[#9ca3af] focus:outline-none"
              style={{ fontFeatureSettings: '"dlig" 1' }}
            />
            <button
              onClick={handleSearch}
              className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#008385]
                         px-4 py-2 text-sm font-medium text-[#fcfcfc]
                         transition-opacity hover:opacity-90
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-[#008385] focus-visible:ring-offset-2"
              style={{ fontFeatureSettings: '"dlig" 1' }}
            >
              <Sparkles size={14} />
              {ctaLabel}
            </button>
          </div>

          {/* Stacked layout on mobile */}
          <div className="flex flex-col gap-2 sm:hidden">
            <div
              className="flex items-center gap-2 rounded-xl border border-[#e5e5e5]
                         bg-white px-3 py-3 shadow-sm"
            >
              <Stethoscope size={16} className="shrink-0 text-[#5d6c71]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={inputPlaceholder}
                className="min-w-0 flex-1 bg-transparent text-sm text-[#0a0a0a]
                           placeholder:text-[#9ca3af] focus:outline-none"
                style={{ fontFeatureSettings: '"dlig" 1' }}
              />
            </div>
            <button
              onClick={handleSearch}
              className="flex w-full items-center justify-center gap-1.5 rounded-xl
                         bg-[#008385] px-4 py-3 text-sm font-medium text-[#fcfcfc]
                         transition-opacity hover:opacity-90
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-[#008385] focus-visible:ring-offset-2"
              style={{ fontFeatureSettings: '"dlig" 1' }}
            >
              <Sparkles size={14} />
              {ctaLabel}
            </button>
          </div>
        </div>

        {/* Suggestion pills */}
        <div className="mb-10 flex flex-wrap items-center gap-x-2 gap-y-2 sm:mb-12">
          <span
            className="text-xs text-[#5d6c71]"
            style={{ fontFeatureSettings: '"dlig" 1' }}
          >
            Try:
          </span>
          {suggestions.map((text) => (
            <button
              key={text}
              onClick={() => handleSuggestionClick(text)}
              className="rounded-full border border-[#e5e5e5] bg-white px-3 py-1
                         text-xs font-medium text-[#5d6c71]
                         transition-colors hover:border-[#008385] hover:text-[#008385]
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-[#008385]"
              style={{ fontFeatureSettings: '"dlig" 1' }}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Stats row
            Mobile  : 2 columns grid (3rd wraps)
            ≥ md    : flex row                   */}
        <div
          className="grid grid-cols-2 gap-x-6 gap-y-7
                     sm:grid-cols-3 sm:gap-x-10
                     md:flex md:gap-x-14"
        >
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-1">
              {stat.icon}
              <span
                className="text-lg font-semibold text-[#0a0a0a] sm:text-xl"
                style={{ fontFeatureSettings: '"dlig" 1' }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs text-[#5d6c71]"
                style={{ fontFeatureSettings: '"dlig" 1' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
