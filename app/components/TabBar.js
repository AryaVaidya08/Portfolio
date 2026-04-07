"use client";

import { useState, useEffect } from "react";
import {
  LuHouse,
  LuBriefcase,
  LuCode,
  LuBookOpen,
  LuStar,
  LuGraduationCap,
  LuSun,
  LuChevronDown,
  LuMenu,
} from "react-icons/lu";

const SECTIONS = [
  {
    id: "hero",
    label: "Home",
    icon: <LuHouse className="tab-icon" />,
  },
  {
    id: "work",
    label: "Work",
    icon: <LuBriefcase className="tab-icon" />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <LuCode className="tab-icon" />,
  },
  {
    id: "research",
    label: "Research",
    icon: <LuBookOpen className="tab-icon" />,
  },
  {
    id: "activities",
    label: "Activities",
    icon: <LuStar className="tab-icon" />,
  },
  {
    id: "education",
    label: "Education",
    icon: <LuGraduationCap className="tab-icon" />,
  },
  {
    id: "fun",
    label: "Fun",
    icon: <LuSun className="tab-icon" />,
  },
];

export default function TabBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          const topmost = intersecting.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topmost.target.id);
        }
      },
      {
        threshold: 0,
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Main pill */}
      <div className={`tabbar-anchor${collapsed ? " is-collapsed" : ""}`}>
        <nav className="tabbar" aria-label="Page sections">
          {SECTIONS.map(({ id, label, icon }) => (
            <button
              key={id}
              className={`tab-btn${activeSection === id ? " is-active" : ""}`}
              onClick={() => scrollTo(id)}
              aria-label={`Go to ${label}`}
              aria-current={activeSection === id ? "true" : undefined}
            >
              {icon}
              <span className="tab-text">{label}</span>
            </button>
          ))}

          {/* Collapse button */}
          <button
            className="tab-collapse-btn"
            onClick={() => setCollapsed(true)}
            aria-label="Collapse navigation"
            title="Collapse"
          >
            <LuChevronDown size={11} />
          </button>
        </nav>
      </div>

      {/* Restore button (bottom-right corner when collapsed) */}
      <div className={`tabbar-restore${collapsed ? " is-visible" : ""}`}>
        <button
          className="restore-btn"
          onClick={() => setCollapsed(false)}
          aria-label="Show navigation"
          title="Show navigation"
        >
          <LuMenu size={16} />
        </button>
      </div>
    </>
  );
}
