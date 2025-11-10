---
title: Circuit Breaker Pattern
description: A resilience pattern that prevents cascading failures in distributed systems
category: Resilience
difficulty: intermediate
technologies:
  - name: JavaScript
    version: "ES6+"
  - name: Node.js
    version: "14+"
author: Technical Patterns Catalog
submittedDate: 2024-01-15
lastUpdated: 2024-01-15
tags:
  - resilience
  - fault-tolerance
  - microservices
  - distributed-systems
---

## Overview

The Circuit Breaker pattern is a design pattern used in modern software development to detect failures and prevent cascading failures in distributed systems. It acts similar to an electrical circuit breaker, stopping the flow of requests when a service is failing.

## Problem

In distributed systems, when a service becomes unavailable or starts responding slowly, continuing to send requests to it can:
- Waste resources and threads
- Cause cascading failures across dependent services
- Degrade the overall system performance
- Lead to a complete system outage

## Solution

The Circuit Breaker pattern wraps service calls and monitors for failures. It has three states:

### States

1. **Closed** - Normal operation. Requests flow through to the service.
2. **Open** - Too many failures detected. Requests immediately fail without calling the service.
3. **Half-Open** - After a timeout, the circuit breaker allows a limited number of test requests to check if the service has recovered.

## Implementation Example

```javascript
class CircuitBreaker {
  constructor(threshold = 5, timeout = 60000) {
    this.state = 'CLOSED';
    this.failureCount = 0;
    this.threshold = threshold;
    this.timeout = timeout;
    this.nextAttempt = Date.now();
  }

  async call(serviceFunction) {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error('Circuit breaker is OPEN');
      }
      this.state = 'HALF_OPEN';
    }

    try {
      const result = await serviceFunction();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }

  onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.threshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.timeout;
    }
  }
}
```

## Benefits

- **Prevents cascading failures** - Stops calls to failing services
- **Fast failure** - Fails immediately when circuit is open
- **Automatic recovery** - Tests service health periodically
- **Resource protection** - Prevents wasting resources on failing calls

## Use Cases

- Microservices communication
- External API integrations
- Database connections
- Third-party service calls

## Related Patterns

- **Retry Pattern** - Often used together with circuit breakers
- **Timeout Pattern** - Prevents indefinite waiting
- **Bulkhead Pattern** - Isolates resources to prevent total system failure

## References

- [Martin Fowler - Circuit Breaker](https://martinfowler.com/bliki/CircuitBreaker.html)
- [Microsoft - Circuit Breaker Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)
