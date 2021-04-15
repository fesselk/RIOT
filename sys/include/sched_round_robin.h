/*
 * Copyright (C) 2020 TUBA Freiberg
 *
 * This file is subject to the terms and conditions of the GNU Lesser
 * General Public License v2.1. See the file LICENSE in the top level
 * directory for more details.
 */

/**
 * @defgroup    sched_round_robin Round Robin Scheduler
 * @ingroup     sys
 * @brief       This module module provides round robin scheduling for all
 *              runable threads within each not masked priority.
 *              Priority 0 is masked by default.
 *              This implementation tries to find a balance between
 *              low resources (static memory: a timer and an uint8),
 *              fairness in terms of CPU time share and
 *              simplicity.
 *              But it does round robin the runqueue when the timer ticks
 *              even if the thread just got the CPU.
 *
 * @{
 *
 * @file
 * @brief       Round Robin Scheduler
 *
 * @author      Karl Fessel <karl.fessel@ovgu.de>
 *
 */
#ifndef SCHED_ROUND_ROBIN_H
#define SCHED_ROUND_ROBIN_H

#ifdef __cplusplus
extern "C" {
#endif

#if !defined(SCHED_RR_TIMEOUT) || defined(DOXYGEN)
/**
 * @brief   Time between round robin calls in µs
 *
 * @details Defaults to 1ms
 */
#define SCHED_RR_TIMEOUT 1000
#endif

#if !defined(SCHED_RR_MASK) || defined(DOXYGEN)
/**
 * @brief   Masks off priorities that should not be scheduled default: 0 is masked
 *
 * @details Priority 0 (highest) should always be masked.
 *          Threads with that priority may not be programmed
 *          with the possibility of being scheduled in mind.
 *          Parts of this scheduler assume 0 current_rr_priority is uninitialised.
 */
#define SCHED_RR_MASK (1 << 0)
#endif

/**
 *  @brief Initialises the Round Robin Scheduler
 */
void sched_round_robin_init(void);

#ifdef __cplusplus
}
#endif

#endif /* SCHED_ROUND_ROBIN_H */
/** @} */
