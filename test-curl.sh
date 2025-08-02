#!/bin/bash

# Test curl command for Supabase Edge Function
curl -X POST "https://hxxjkmgznhhvvmpokfih.supabase.co/functions/v1/sync-ideas" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4eGprbWd6bmhodnZtcG9rZmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyOTcxMTEsImV4cCI6MjA0Mjg3MzExMX0.NQgQz6SHPz6sGCEMAlnDNZmE6SQNT8HEa6-6q1WDZlE" \
  -H "Content-Type: application/json" \
  -d '{
    "product_name": "AI-Powered Personal Learning Assistant",
    "problem_statement": "Students struggle with personalized learning paths and adaptive content delivery that matches their individual learning styles and pace",
    "executive_summary": "An intelligent platform that creates personalized learning paths by analyzing individual learning patterns, preferences, and goals using advanced AI",
    "market_analysis": {
      "target_segment": "EdTech",
      "total_market": "Education Technology professionals and students"
    },
    "business_model": {
      "primary_model": "Subscription-based SaaS"
    },
    "resource_requirements": [
      {
        "role": "Software Developer",
        "salary": "$85,000/year"
      }
    ],
    "financial_projections": [
      {
        "year": 2025,
        "revenue": "$2.5M"
      }
    ],
    "key_business_metrics": {
      "time_to_mvp": "8-12 months"
    },
    "key_strengths": [
      "Automated learning path generation",
      "AI-powered content adaptation",
      "Real-time progress tracking"
    ],
    "key_challenges": [
      "Building trust with educational institutions",
      "Ensuring data privacy compliance"
    ],
    "go_to_market_strategy": [
      "Partner with educational institutions",
      "Content marketing to educators",
      "Free trial for teachers"
    ],
    "success_metrics_kpis": [
      "Student engagement scores",
      "Learning outcome improvements",
      "Teacher satisfaction ratings"
    ],
    "risk_assessment_and_mitigation": [
      {
        "risk": "Low user adoption in traditional schools",
        "likelihood": "Medium",
        "impact": "High",
        "mitigation": "Focus on progressive schools and early adopters first"
      }
    ],
    "recommended_next_steps": [
      "Develop MVP with core learning algorithms",
      "Pilot with select educational partners",
      "Gather user feedback for iteration"
    ]
  }'
