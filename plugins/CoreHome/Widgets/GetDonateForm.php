<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\CoreHome\Widgets;

use Piwik\Common;
use Piwik\Piwik;
use Piwik\Widget\Widget;
use Piwik\Widget\WidgetConfig;
use Piwik\Translation\Translator;
use Piwik\View;

class GetDonateForm extends Widget
{
    /**
     * @var Translator
     */
    private $translator;

    public function __construct(Translator $translator)
    {
        $this->translator = $translator;
    }

    public static function configure(WidgetConfig $config)
    {
        $config->setCategoryId('About Piwik');
        $config->setName('CoreHome_SupportPiwik');
        $config->setOrder(5);
    }

    public function render()
    {
        $footerMessage = null;
        if (Common::getRequestVar('widget', false)
            && Piwik::hasUserSuperUserAccess()) {
            $footerMessage = $this->translator->translate('CoreHome_OnlyForSuperUserAccess');
        }

        return $this->renderTemplate('getDonateForm', array(
            'footerMessage' => $footerMessage
        ));
    }
}