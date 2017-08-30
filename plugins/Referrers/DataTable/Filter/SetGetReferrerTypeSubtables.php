<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\Referrers\DataTable\Filter;

use Piwik\Common;
use Piwik\DataTable\Row;
use Piwik\DataTable;
use Piwik\Period\Range;
use Piwik\Plugins\Referrers\API;
use Piwik\Metrics;

/**
 * Utility function that sets the subtables for the getReferrerType report.
 *
 * If we're not getting an expanded datatable, the subtable ID is set to each parent
 * row's referrer type (stored in the label for the getReferrerType report).
 *
 * If we are getting an expanded datatable, the datatable for the row's referrer
 * type is loaded and attached to the appropriate row in the getReferrerType report.
 */
class SetGetReferrerTypeSubtables extends DataTable\BaseFilter
{
    /** @var int */
    private $idSite;

    /** @var string */
    private $period;

    /** @var string */
    private $date;

    /** @var string */
    private $segment;

    /** @var bool */
    private $expanded;

    /**
     * Constructor.
     *
     * @param DataTable $table The table to eventually filter.
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param string $segment
     * @param bool $expanded
     */
    public function __construct($table, $idSite, $period, $date, $segment, $expanded)
    {
        parent::__construct($table);
        $this->idSite   = $idSite;
        $this->period   = $period;
        $this->date     = $date;
        $this->segment  = $segment;
        $this->expanded = $expanded;
    }

    public function filter($table)
    {
        //$columnsToRemove = array('nb_uniq_visitors', 'bounce_count', 'nb_visits_converted', 'nb_users');
        $columnsToRemove = array(Metrics::INDEX_NB_UNIQ_VISITORS, Metrics::INDEX_BOUNCE_COUNT, Metrics::INDEX_NB_VISITS_CONVERTED, Metrics::INDEX_NB_CONVERSIONS, Metrics::INDEX_NB_USERS);
        $table->filter('ColumnDelete', array($columnsToRemove));
        \Piwik\Log::debug('table process getReferrerType: %s', implode(', ', $table->getColumns()));
        
        foreach ($table->getRows() as $row) {
            $typeReferrer = $row->getColumn('label');

            if ($typeReferrer != Common::REFERRER_TYPE_DIRECT_ENTRY) {
                if (!$this->expanded) // if we don't want the expanded datatable, then don't do any extra queries
                {
                    $row->setNonLoadedSubtableId($typeReferrer);
                } else if (!Range::isMultiplePeriod($this->date, $this->period))
                {
                    // otherwise, we have to get the other datatables
                    // NOTE: not yet possible to do this w/ DataTable\Map instances
                    // (actually it would be maybe possible by using $map->mergeChildren() or so build it would be slow)
                    $subtable = API::getInstance()->getReferrerType(
                        $this->idSite, $this->period, $this->date, $this->segment, $type = false, $idSubtable = $typeReferrer
                    );

                    if ($this->expanded) {
                        $subtable->applyQueuedFilters();
                    }
                    \Piwik\Log::debug('subTable when getReferrerType: %s', implode(', ', $subtable->getColumns()));
                    $subtable->filter('ColumnDelete', array($columnsToRemove));
                    \Piwik\Log::debug('subTable when getReferrerType after: %s', implode(', ', $subtable->getColumns()));  
                    
                    $row->setSubtable($subtable);
                }
            }
        }

    }
}